import React, { createContext, useContext, useState, useEffect } from 'react';

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  // Load notifications from backend
  const [notifications, setNotifications] = useState([]);
  const [newTaskCount, setNewTaskCount] = useState(0);

  useEffect(() => {
    // Use demo API for notifications
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res => res.json())
      .then(data => {
        // Treat posts as notifications
        setNotifications(data.map(post => ({
          id: post.id,
          message: post.title,
          user: 'demo',
          read: false
        })));
        setNewTaskCount(10);
      });
  }, []);

  // Add notification for a user (backend)
  const addNotification = async (message, user) => {
    // Use demo API for notification creation
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: message, body: '', user })
    });
    // Refresh notifications
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res => res.json())
      .then(data => {
        setNotifications(data.map(post => ({
          id: post.id,
          message: post.title,
          user: 'demo',
          read: false
        })));
        setNewTaskCount(10);
      });
  };

  // Mark all notifications as read (frontend only, could be extended to backend)
  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    setNewTaskCount(0);
    // Optionally, send update to backend for read status
  };

  return (
    <NotificationContext.Provider value={{ notifications, newTaskCount, addNotification, markAllRead }}>
      {children}
    </NotificationContext.Provider>
  );
};
