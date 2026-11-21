import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Contact enquiry submission
export const contactService = {
  submit: (data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }) => api.post('/contact', data),
  list: () => api.get('/contact'),
  updateStatus: (id: string, status: string) =>
    api.patch(`/contact/${id}/status`, { status }),
};

// Auth
export const authService = {
  register: (data: { name: string; email: string; password: string }) =>
    api.post('/auth/register', data),
  login: (data: { email: string; password: string }) => api.post('/auth/login', data),
  logout: () => api.post('/auth/logout'),
  me: () => api.get('/auth/me'),
  adminOnly: () => api.get('/auth/admin-only'),
};

// Admin
export const adminService = {
  stats: () => api.get('/admin/stats'),
  users: () => api.get('/admin/users'),
  updateRole: (id: string, role: string) => api.patch(`/admin/users/${id}/role`, { role }),
  deleteUser: (id: string) => api.delete(`/admin/users/${id}`),
};
