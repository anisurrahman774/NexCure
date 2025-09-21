import React, { useState, useEffect } from 'react';
import { useNotification } from '../context/NotificationContext';
import { useUser } from '../context/UserContext';
import TaskInput from './TaskInput';


const TrackingSystem = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true); // true = admin, false = view
  // Notification system (use context)
  const { addNotification } = useNotification();
  const { user } = useUser();

  // useEffect will be updated for backend integration
  useEffect(() => {
    // Fetch tasks from demo API
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const handleTaskSubmit = async (taskData) => {
    if (editingTask) {
      // Update task in demo API (PUT)
      await fetch(`https://jsonplaceholder.typicode.com/todos/${editingTask.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData)
      });
    } else {
      // Add new task in demo API (POST)
      await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData)
      });
    }
    // Refresh tasks
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(data => setTasks(data));
    setEditingTask(null);
    setShowTaskInput(false);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowTaskInput(true);
  };

  const handleDeleteTask = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, { method: 'DELETE' });
      // Refresh tasks
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => res.json())
        .then(data => setTasks(data));
    }
  };

  const handleCloseTaskInput = () => {
    setShowTaskInput(false);
    setEditingTask(null);
  };

  const handleStatusUpdate = async (taskId, newStatus) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...task, completed: newStatus === 'Completed' })
      });
      // Refresh tasks
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => res.json())
        .then(data => setTasks(data));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-gray-100 text-gray-800';
      case 'On Hold': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateBudgetUtilization = (spent, budget) => {
    return ((spent / budget) * 100).toFixed(1);
  };

  const getProjectStats = () => {
    const totalProjects = projects.length;
    const completedProjects = projects.filter(p => p.status === 'Completed').length;
    const inProgressProjects = projects.filter(p => p.status === 'In Progress').length;
    const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);
    const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0);
    const avgProgress = projects.reduce((sum, p) => sum + p.progress, 0) / totalProjects;

    return {
      totalProjects,
      completedProjects,
      inProgressProjects,
      totalBudget,
      totalSpent,
      avgProgress: avgProgress.toFixed(1)
    };
  };

  const getTaskStats = () => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.status === 'Completed').length;
    const inProgressTasks = tasks.filter(t => t.status === 'In Progress').length;
    const pendingTasks = tasks.filter(t => t.status === 'Pending').length;
    const totalEstimatedHours = tasks.reduce((sum, t) => sum + t.estimatedHours, 0);
    const totalActualHours = tasks.reduce((sum, t) => sum + (t.actualHours || 0), 0);

    return {
      totalTasks,
      completedTasks,
      inProgressTasks,
      pendingTasks,
      totalEstimatedHours,
      totalActualHours
    };
  };

  const stats = getProjectStats();
  const taskStats = getTaskStats();

  return (
    <div className="bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Research Tracking System</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                activeTab === 'projects'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('tasks')}
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                activeTab === 'tasks'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Tasks
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                activeTab === 'analytics'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Analytics
            </button>
          </div>
        </div>
        {/* Admin/View Toggle */}
        {activeTab === 'tasks' && (
          <div className="flex items-center mt-4">
            <span className="mr-2 font-medium">Mode:</span>
            <button
              onClick={() => setIsAdmin(true)}
              className={`px-3 py-1 rounded-l-md font-medium border ${isAdmin ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Admin
            </button>
            <button
              onClick={() => setIsAdmin(false)}
              className={`px-3 py-1 rounded-r-md font-medium border-l-0 border ${!isAdmin ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              View
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'projects' && (
          <div>
            {/* Project Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{stats.totalProjects}</div>
                <div className="text-sm text-blue-800">Total Projects</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{stats.completedProjects}</div>
                <div className="text-sm text-green-800">Completed</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">{stats.inProgressProjects}</div>
                <div className="text-sm text-yellow-800">In Progress</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{stats.avgProgress}%</div>
                <div className="text-sm text-purple-800">Avg Progress</div>
              </div>
            </div>

            {/* Projects List */}
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-3">{project.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Category: {project.category}</span>
                        <span>Start: {new Date(project.startDate).toLocaleDateString()}</span>
                        <span>End: {new Date(project.endDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(project.priority)}`}>
                        {project.priority} Priority
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Budget and Team */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Budget</h4>
                      <div className="text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Spent: {formatCurrency(project.spent)}</span>
                          <span>Budget: {formatCurrency(project.budget)}</span>
                        </div>
                        <div className="mt-1">
                          <div className="flex justify-between text-xs">
                            <span>Utilization: {calculateBudgetUtilization(project.spent, project.budget)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                            <div 
                              className="bg-green-500 h-1 rounded-full"
                              style={{ width: `${calculateBudgetUtilization(project.spent, project.budget)}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Team Members</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.team.map((member, idx) => (
                          <span key={idx} className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div>
            {/* Task Stats and Add Button */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 md:mb-0">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{taskStats.totalTasks}</div>
                  <div className="text-sm text-blue-800">Total Tasks</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{taskStats.completedTasks}</div>
                  <div className="text-sm text-green-800">Completed</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{taskStats.inProgressTasks}</div>
                  <div className="text-sm text-yellow-800">In Progress</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-600">{taskStats.pendingTasks}</div>
                  <div className="text-sm text-gray-800">Pending</div>
                </div>
              </div>
              {isAdmin && (
                <button
                  onClick={() => setShowTaskInput(true)}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Add New Task</span>
                </button>
              )}
            </div>

            {/* Tasks Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignee</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tasks.map((task) => (
                    <tr key={task.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{task.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{task.project}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{task.assignee}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={task.status}
                          onChange={(e) => {
                            if (isAdmin) {
                              handleStatusUpdate(task.id, e.target.value);
                            } else {
                              // Only allow marking as Completed
                              if ((task.status === 'Pending' || task.status === 'In Progress') && e.target.value === 'Completed') {
                                handleStatusUpdate(task.id, 'Completed');
                              }
                            }
                          }}
                          className={`px-2 py-1 text-xs font-medium rounded-full border-0 cursor-pointer ${getStatusColor(task.status)}`}
                          disabled={!isAdmin && task.status === 'Completed'}
                        >
                          {isAdmin ? (
                            <>
                              <option value="Pending">Pending</option>
                              <option value="In Progress">In Progress</option>
                              <option value="Completed">Completed</option>
                              <option value="On Hold">On Hold</option>
                            </>
                          ) : (
                            <>
                              <option value={task.status}>{task.status}</option>
                              {(task.status === 'Pending' || task.status === 'In Progress') && <option value="Completed">Completed</option>}
                            </>
                          )}
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(task.dueDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {task.actualHours || 0}/{task.estimatedHours}h
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          {isAdmin && (
                            <>
                              <button
                                onClick={() => handleEditTask(task)}
                                className="text-primary-600 hover:text-primary-900 transition-colors"
                                title="Edit task"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                              </button>
                              <button
                                onClick={() => handleDeleteTask(task.id)}
                                className="text-red-600 hover:text-red-900 transition-colors"
                                title="Delete task"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Budget Overview */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Overview</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Total Budget</span>
                      <span>{formatCurrency(stats.totalBudget)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Total Spent</span>
                      <span>{formatCurrency(stats.totalSpent)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-gray-900 mb-2">
                      <span>Remaining</span>
                      <span>{formatCurrency(stats.totalBudget - stats.totalSpent)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full"
                        style={{ width: `${calculateBudgetUtilization(stats.totalSpent, stats.totalBudget)}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {calculateBudgetUtilization(stats.totalSpent, stats.totalBudget)}% utilized
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Tracking */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Time Tracking</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Estimated Hours</span>
                      <span>{taskStats.totalEstimatedHours}h</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Actual Hours</span>
                      <span>{taskStats.totalActualHours}h</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-gray-900 mb-2">
                      <span>Variance</span>
                      <span className={taskStats.totalActualHours > taskStats.totalEstimatedHours ? 'text-red-600' : 'text-green-600'}>
                        {taskStats.totalActualHours > taskStats.totalEstimatedHours ? '+' : ''}
                        {(taskStats.totalActualHours - taskStats.totalEstimatedHours).toFixed(1)}h
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Status Distribution */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Completed</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${(stats.completedProjects / stats.totalProjects) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{stats.completedProjects}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">In Progress</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(stats.inProgressProjects / stats.totalProjects) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{stats.inProgressProjects}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Planning</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-500 h-2 rounded-full"
                          style={{ width: `${((stats.totalProjects - stats.completedProjects - stats.inProgressProjects) / stats.totalProjects) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{stats.totalProjects - stats.completedProjects - stats.inProgressProjects}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Research Categories</h3>
                <div className="space-y-3">
                  {['Medical AI', 'Bioinformatics', 'Agriculture AI', 'Robotics', 'Drug Discovery'].map((category, index) => {
                    const categoryProjects = projects.filter(p => p.category === category);
                    const categoryBudget = categoryProjects.reduce((sum, p) => sum + p.budget, 0);
                    return (
                      <div key={category} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{category}</span>
                        <div className="flex items-center space-x-2">
                          <div className="text-sm text-gray-900">{categoryProjects.length} projects</div>
                          <div className="text-xs text-gray-500">({formatCurrency(categoryBudget)})</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Task Input Modal */}
      {showTaskInput && (
        <TaskInput
          onTaskSubmit={handleTaskSubmit}
          onClose={handleCloseTaskInput}
          editTask={editingTask}
          projects={projects}
        />
      )}
    </div>
  );
};

export default TrackingSystem;
