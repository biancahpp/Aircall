import api from "./apiConfig";

export const getCalls = async () => {
  try {
    const response = await api.get('/activities');
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export const updateCallArchive = async (id, isArchived) => {
  try {
    const response = await api.post(`/activities/${id}`, { is_archived: isArchived });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}


