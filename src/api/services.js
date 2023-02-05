import axios from "axios";

const baseURL = "http://13.228.92.141:8000";

export const createNewUser = (payload) => {
  return axios.post(baseURL + `/api/user/create/`, payload);
};

export const loginUser = (payload) => {
  return axios.post(baseURL + `/api/user/login/`, payload);
};

export const getCategories = () => {
  return axios.get(baseURL + `/api/category/`);
};

export const getSubCategories = () => {
  return axios.get(baseURL + `/api/subcategory/`);
};

export const getBrands = () => {
  return axios.get(baseURL + `/api/brand/`);
};

export const getSearchBrandsType = (type) => {
  if (type === "Featured")
    return axios.get(baseURL + `/api/brand/`, { params: { featured: true } });
  else if (type === "Best")
    return axios.get(baseURL + `/api/brand/`, { params: { top: true } });
  else if (type === "Latest")
    return axios.get(baseURL + `/api/brand/`, { params: { latest: true } });
};

export const getSearchedBrands = (data) => {
  return axios.get(baseURL + `/api/brand/`, { params: data });
};

export const sortBrands = (sort, type) => {
  return axios.get(baseURL + `/api/brand/`, {
    params: { sort: sort, type: type },
  });
};

export const getBrandById = (id) => {
  return axios.get(baseURL + `/api/brand/` + id);
};

export const createEnquiry = (payload) => {
  return axios.post(baseURL + `/api/brand/enquiry/create`, payload);
};

export const createPaymentLink = (headers) => {
  return axios.post(
    baseURL + "/api/payments/link/create",
    {},
    {
      headers: headers,
    }
  );
};

export const createContactRequest = (payload) => {
  return axios.post(baseURL + `/api/contact/request`, payload);
};

export const createQuizRecord = (header, payload) => {
  return axios.post(baseURL + `/api/user/fra/submit`, payload, {
    headers: header,
  });
};

export const createDocSubmit = (header, payload) => {
  return axios.post(baseURL + `/api/user/fra/upload`, payload, {
    headers: header,
  });
};

export const scheduleVisitApi = (header, payload) => {
  return axios.post(baseURL + `/api/user/fra/schedule`, payload, {
    headers: header,
  });
};

export const createBusinessRequest = (payload) => {
  return axios.post(baseURL + `/api/business/enquiry/create`, payload);
};

export const createAcademyRequest = (payload) => {
  return axios.post(baseURL + `/api/academy/request`, payload);
};
