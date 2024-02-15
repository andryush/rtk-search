export const parseQueryString = (queryString: string): Record<string, string> => {
  const params = new URLSearchParams(queryString);
  const paramsObject: Record<string, string> = {};

  params.forEach((value, key) => {
    paramsObject[key] = value;
  });

  return paramsObject;
};
