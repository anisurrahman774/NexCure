import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useNotification } from '../context/NotificationContext';
import { useUser } from '../context/UserContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const { notifications, newTaskCount, markAllRead } = useNotification();
  const { user } = useUser();
  // Close notification dropdown when clicking outside
  React.useEffect(() => {
    if (showNotifications) {
      markAllRead(); // Mark notifications as read
    }
    const handleClick = (e) => {
      const bell = document.getElementById('notification-bell');
      const dropdown = document.getElementById('notification-dropdown');
      if (bell && bell.contains(e.target)) return;
      if (dropdown && dropdown.contains(e.target)) return;
      setShowNotifications(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showNotifications]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/research' },
    { name: 'Publications', href: '/publications' },
    { name: 'Services', href: '/services' },
    { name: 'Tracking', href: '/tracking' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // Filter notifications: show if user is admin or notification.user === user.name
  const filteredNotifications = notifications.filter(note => {
    if (user.role === 'admin') return true;
    return note.user === user.name;
  });

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient">NexCure Lab</h1>
              <p className="text-sm text-gray-600">Advanced Research Laboratory</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <SearchBar placeholder="Search research, publications, team..." onSearch={(result) => { console.log('Navigated to:', result.route); }} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Notification Bell Icon */}
            <button
              id="notification-bell"
              className="relative ml-4 focus:outline-none"
              title="Notifications"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <svg className="w-6 h-6 text-gray-600 hover:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {newTaskCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                  {newTaskCount}
                </span>
              )}
            </button>
            {/* Notification Dropdown */}
            {showNotifications && (
              <div id="notification-dropdown" className="absolute right-8 mt-12 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-4 border-b border-gray-100 font-bold text-gray-900">Notifications</div>
                <ul className="max-h-64 overflow-y-auto">
                  {filteredNotifications.length === 0 ? (
                    <li className="p-4 text-gray-500">No new notifications</li>
                  ) : (
                    filteredNotifications.map((note) => (
                      <li key={note.id} className={`p-4 border-b border-gray-100 text-gray-700 hover:bg-gray-50 cursor-pointer ${note.read ? 'opacity-60' : ''}`}>
                        {note.message.split('\n').map((line, idx) => (
                          <div key={idx}>{line}</div>
                        ))}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          {/* Notification Bell Icon for mobile (optional) */}
          <button
            className="md:hidden relative mr-2 focus:outline-none"
            title="Notifications"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <svg className="w-6 h-6 text-gray-600 hover:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {newTaskCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                {newTaskCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            {/* Mobile Search */}
            <div className="px-4 mb-4">
              <SearchBar placeholder="Search..." />
            </div>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
