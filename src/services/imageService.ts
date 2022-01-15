import http from 'helpers/http';
import config from 'config';
import { ResponseData } from 'models/response';

const imageService = {
	imageUpload: (data: any) => {
		return http.upload<ResponseData<any>>(config.API.END_POINT.IMAGE_UPLOAD, {
			image: data
		});
	}
};

export default imageService;
