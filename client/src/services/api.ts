const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

async function request(
  path: string,
  options: RequestInit = {}
): Promise<any> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `Request failed: ${response.status}`);
  }
  return response.text() ? response.json() : null;
}

// Contact enquiry submission
export const contactService = {
  submit: (data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }) => request('/contact', { method: 'POST', body: JSON.stringify(data) }),
  list: () => request('/contact'),
  updateStatus: (id: string, status: string) =>
    request(`/contact/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) }),
};

// Auth
export const authService = {
  register: (data: { name: string; email: string; password: string }) =>
    request('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
  login: (data: { email: string; password: string }) =>
    request('/auth/login', { method: 'POST', body: JSON.stringify(data) }),
  logout: () => request('/auth/logout', { method: 'POST' }),
  me: () => request('/auth/me'),
  adminOnly: () => request('/auth/admin-only'),
};

// Admin
export const adminService = {
  stats: () => request('/admin/stats'),
  users: () => request('/admin/users'),
  updateRole: (id: string, role: string) =>
    request(`/admin/users/${id}/role`, { method: 'PATCH', body: JSON.stringify({ role }) }),
  deleteUser: (id: string) => request(`/admin/users/${id}`, { method: 'DELETE' }),
};
