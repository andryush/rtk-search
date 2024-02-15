import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { SubjectsData, SpecialistsData } from './types';
import { BASE_URL } from '@/constants';

export const specialistsApi = createApi({
  reducerPath: 'specialistsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Specialists'],
  endpoints: (builder) => ({
    getSubjects: builder.query<SubjectsData, void>({
      query: () => `subjects`,
    }),
    getSpecialists: builder.query<SpecialistsData, string>({
      query: (params) => `search/specialists?${params}`,
      providesTags: ['Specialists'],
    }),
  }),
});

export const { useLazyGetSpecialistsQuery, useGetSubjectsQuery, useGetSpecialistsQuery } = specialistsApi;
