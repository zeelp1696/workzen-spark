// src/api/api.ts

const BASE_URL = "http://localhost:5173/api"; // your FastAPI backend

// Generic GET
export async function getData(path: string) {
  const res = await fetch(`${BASE_URL}/${path}`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

// Generic POST
export async function postData(path: string, data: any) {
  const res = await fetch(`${BASE_URL}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to post");
  return res.json();
}
