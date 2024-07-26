"use server";
import { Event } from "@/app/(user)/events/page";
import fetcher from "./fetcher";

export async function getManyEvents() {
  try {
    const response = await fetcher.get(`/events`);
    return response.data;
  } catch (error) {
    return { error };
  }
}

export async function createEvent(data: Event) {
  try {
    const response = await fetcher.post("/events", data); // Ensure correct endpoint and payload
    return response.data as Event | null;
  } catch (error: any) {
    console.error(
      "Error creating event:",
      error.response?.data || error.message
    ); // Improved error logging
    throw error; // Re-throw the error for further handling
  }
}

// export async function updateProduct(id, data) {
//   try {
//     const response = await fetcher.put(`/products/${id}`, data);
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error updating product:",
//       error.response?.data || error.message
//     );
//     throw error;
//   }
// }

// export async function getProduct(id) {
//   try {
//     const response = await fetcher.get(`/products/${id}`); // Ensure correct endpoint and payload
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error creating product:",
//       error.response?.data || error.message
//     ); // Improved error logging
//     throw error; // Re-throw the error for further handling
//   }
// }

// export async function deleteProduct(id) {
//   try {
//     const response = await fetcher.delete(`/products/${id}`);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error deleting product:",
//       error.response?.data || error.message
//     );
//     throw error;
//   }
// }
