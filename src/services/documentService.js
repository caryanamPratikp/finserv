import api from "./api";

export const getDocuments = (customerId) => api.get(`/documents/${customerId}`);
export const uploadDocument = (data) => api.post("/documents/upload", data);
export const deleteDocument = (id) => api.delete(`/documents/${id}`);
