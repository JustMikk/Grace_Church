"use server";
import fetcher from "./fetcher";

export async function getManyMembers() {
  try {
    const response = await fetcher.get(`/members`);
    return response.data;
  } catch (error) {
    return { error };
  }
}

export async function deleteMember(id: number) {
  try {
    const response = await fetcher.delete(`/members/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error deleting member:",
      error.response?.data || error.message
    );
    throw error;
  }
}
