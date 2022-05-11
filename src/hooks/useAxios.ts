import axios from 'axios';
import {useState} from 'react';
import {useSnackbar} from 'notistack';

interface RequestConfig {
  url: string;
  method?: string;
}

interface RequestBody {
  data?: any;
  params?: any;
}

axios.defaults.baseURL = 'https://avl-frontend-exam.herokuapp.com/api';

const useAxios = (requestConfig: RequestConfig) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const {enqueueSnackbar} = useSnackbar();

  const sendRequest = async (body: RequestBody) => {
    setIsLoading(true);
    try {
      const res = await axios({
        url: requestConfig.url,
        method: requestConfig.method || 'GET',
        headers: {},
        data: body.data || null,
        params: body.params || null,
      });
      if (res.data) {
        setError(null);
        return res.data;
      } else {
        console.log(99999, res);
      }
    } catch (error) {
      console.log('ERR', error);
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      setError(message || 'Something went wrong!');
      enqueueSnackbar(message, {variant: 'error'});
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useAxios;
