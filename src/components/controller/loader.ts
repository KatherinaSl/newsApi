import { IUrlOptions, IRequest, SuccessCallBack, ISuccessResponse } from '../../interfaces-api/index';

enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

class Loader {
    public baseLink: string;
    public options: Partial<IUrlOptions>;
    constructor(baseLink: string, options: Partial<IUrlOptions>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: IRequest,
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load(Method.GET, endpoint, callback, options);
    }

    public errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    public makeUrl(options: Partial<IUrlOptions>, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    public load<T extends ISuccessResponse>(
        method: string,
        endpoint: string,
        callback: SuccessCallBack<T>,
        options: Partial<IUrlOptions>
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data) => callback(data))
            .catch((err: string) => console.error(err));
    }
}

export default Loader;
