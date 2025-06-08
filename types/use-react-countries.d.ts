declare module "use-react-countries" {
  interface Country {
    name: string;
    countryCallingCode: string;
    flags: {
      png: string;
      svg: string;
    };
  }

  interface UseCountriesReturn {
    countries: Country[];
    loading: boolean;
    error: Error | null;
  }

  export function useCountries(): UseCountriesReturn;
}
