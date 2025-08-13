// src/api.js
import axios from "axios";

const API_BASE = "http://localhost:3000/api";

const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
});

// Endpoints used by FeesReceipt
export const getStudentByAdmission = (admissionNo) =>
  api.get(`/students/student/${admissionNo}`);

export const getPendingFees = (admissionNo) =>
  api.get("/fees/pending", { params: { admissionNo } });

export const searchStudents = (params) =>
  api.get("/students", { params });

export const applyFees = (payload) => api.post("/fees/apply", payload);

export default api;
