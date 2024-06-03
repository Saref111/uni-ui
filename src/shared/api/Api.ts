/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BasicError {
  msg: string;
  type: string;
}

export interface BasicResult {
  result: BasicResultInner;
}

export interface BasicResultInner {
  result: string;
}

export interface GenerationInput {
  /**
   * Maximum number of tokens to send to the model.
   * @min 1
   */
  max_context_length?: number;
  /**
   * Number of tokens to generate.
   * @min 1
   */
  max_length?: number;
  /** This is the submission. */
  prompt: string;
  /**
   * Base repetition penalty value.
   * @min 1
   */
  rep_pen?: number;
  /**
   * Repetition penalty range.
   * @min 0
   */
  rep_pen_range?: number;
  /**
   * Sampler order to be used. If N is the length of this array, then N must be greater than or equal to 6 and the array must be a permutation of the first N non-negative integers.
   * @minItems 6
   */
  sampler_order?: number[];
  /**
   * RNG seed to use for sampling. If not specified, the global RNG will be used.
   * @min 1
   * @max 999999
   */
  sampler_seed?: number;
  /** An array of string sequences where the API will stop generating further tokens. The returned text WILL contain the stop sequence. */
  stop_sequence?: string[];
  /**
   * Temperature value.
   * @exclusiveMin 0
   */
  temperature?: number;
  /**
   * Tail free sampling value.
   * @min 0
   * @max 1
   */
  tfs?: number;
  /**
   * Top-a sampling value.
   * @min 0
   */
  top_a?: number;
  /**
   * Top-k sampling value.
   * @min 0
   */
  top_k?: number;
  /**
   * Top-p sampling value.
   * @min 0
   * @max 1
   */
  top_p?: number;
  /**
   * Min-p sampling value.
   * @min 0
   * @max 1
   */
  min_p?: number;
  /**
   * Typical sampling value.
   * @min 0
   * @max 1
   */
  typical?: number;
  /**
   * If true, prevents the EOS token from being generated (Ban EOS).
   * @default false
   */
  use_default_badwordsids?: boolean;
  /**
   * If greater than 0, uses dynamic temperature. Dynamic temperature range will be between Temp+Range and Temp-Range. If less or equal to 0 , uses static temperature.
   * @exclusiveMin 0
   * @default 0
   */
  dynatemp_range?: number;
  /**
   * Modifies temperature behavior. If greater than 0 uses smoothing factor.
   * @exclusiveMin 0
   * @default 0
   */
  smoothing_factor?: number;
  /**
   * Exponent used in dynatemp.
   * @default 1
   */
  dynatemp_exponent?: number;
  /**
   * KoboldCpp ONLY. Sets the mirostat mode, 0=disabled, 1=mirostat_v1, 2=mirostat_v2
   * @min 0
   * @max 2
   */
  mirostat?: number;
  /**
   * KoboldCpp ONLY. Mirostat tau value.
   * @exclusiveMin 0
   */
  mirostat_tau?: number;
  /**
   * KoboldCpp ONLY. Mirostat eta value.
   * @exclusiveMin 0
   */
  mirostat_eta?: number;
  /** KoboldCpp ONLY. A unique genkey set by the user. When checking a polled-streaming request, use this key to be able to fetch pending text even if multiuser is enabled. */
  genkey?: string;
  /** KoboldCpp ONLY. A string containing the GBNF grammar to use. */
  grammar?: string;
  /**
   * KoboldCpp ONLY. If true, retains the previous generation's grammar state, otherwise it is reset on new generation.
   * @default false
   */
  grammar_retain_state?: boolean;
  /** KoboldCpp ONLY. If set, forcefully appends this string to the beginning of any submitted prompt text. If resulting context exceeds the limit, forcefully overwrites text from the beginning of the main prompt until it can fit. Useful to guarantee full memory insertion even when you cannot determine exact token count. */
  memory?: string;
  /** KoboldCpp ONLY. If set, takes an array of base64 encoded strings, each one representing an image to be processed. */
  images?: any[];
  /**
   * KoboldCpp ONLY. If true, also removes detected stop_sequences from the output and truncates all text after them.
   * @default false
   */
  trim_stop?: boolean;
  /**
   * KoboldCpp ONLY. If true, prints special tokens as text for GGUF models
   * @default false
   */
  render_special?: boolean;
  /**
   * KoboldCpp ONLY. If true, allows EOS token to be generated, but does not stop generation. Not recommended unless you know what you are doing.
   * @default false
   */
  bypass_eos?: boolean;
  /** An array of string sequences to remove from model vocab. All matching tokens with matching substrings are removed. */
  banned_tokens?: string[];
  /**
   * KoboldCpp ONLY. An dictionary of key-value pairs, which indicate the token IDs (int) and logit bias (float) to apply for that token. Up to 16 value can be provided.
   * @default {}
   * @example {"2":-20,"145":-1.4,"3105":3.2}
   */
  logit_bias?: object;
}

export interface GenerationOutput {
  /** Array of generated outputs. */
  results: GenerationResult[];
}

export interface GenerationResult {
  /** Generated output as plain text. */
  text: string;
}

export interface MaxContextLengthSetting {
  /** @min 8 */
  value: number;
}

export interface MaxLengthSetting {
  /** @min 1 */
  value: number;
}

export interface ServerBusyError {
  detail: BasicError;
}

export interface ValueResult {
  value: number;
}

export interface KcppVersion {
  result?: string;
  version: string;
}

export interface KcppPerf {
  /** Last processing time in seconds. */
  last_process?: number;
  /** Last evaluation time in seconds. */
  last_eval?: number;
  /** Last token count. */
  last_token_count?: number;
  /** Last generation seed used. */
  last_seed?: number;
  /** Total requests generated since startup. */
  total_gens?: number;
  /** Reason the generation stopped. INVALID=-1, OUT_OF_TOKENS=0, EOS_TOKEN_HIT=1, CUSTOM_STOPPER=2 */
  stop_reason?: number;
  /** Length of generation queue. */
  queue?: number;
  /** Status of backend, busy or idle. */
  idle?: number;
  /** Status of embedded horde worker. If it's too high, may have crashed. */
  hordeexitcounter?: number;
  /** Seconds that the server has been running for. */
  uptime?: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "/";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === "number" ? value : `${value}`
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${
        queryString ? `?${queryString}` : ""
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title KoboldCpp API
 * @version 1.61
 * @baseUrl /
 *
 * For swagger.json, click here.
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags api/v1
     * @name V1ConfigMaxContextLengthList
     * @summary Retrieve the current max context length setting value that horde sees
     * @request GET:/api/v1/config/max_context_length
     */
    v1ConfigMaxContextLengthList: (params: RequestParams = {}) =>
      this.request<MaxContextLengthSetting, any>({
        path: `/api/v1/config/max_context_length`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags api/v1
     * @name V1ConfigMaxLengthList
     * @summary Retrieve the current max length (amount to generate) setting value
     * @request GET:/api/v1/config/max_length
     */
    v1ConfigMaxLengthList: (params: RequestParams = {}) =>
      this.request<MaxLengthSetting, any>({
        path: `/api/v1/config/max_length`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Generates text given a prompt and generation settings. Unspecified values are set to defaults.
     *
     * @tags api/v1
     * @name V1GenerateCreate
     * @summary Generate text with a specified prompt
     * @request POST:/api/v1/generate
     */
    v1GenerateCreate: (data: GenerationInput, params: RequestParams = {}) =>
      this.request<GenerationOutput, ServerBusyError>({
        path: `/api/v1/generate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the matching *KoboldAI* (United) version of the API that you are currently using. This is not the same as the KoboldCpp API version - this is used to feature match against KoboldAI United.
     *
     * @tags api/v1
     * @name V1InfoVersionList
     * @summary Current KoboldAI United API version
     * @request GET:/api/v1/info/version
     */
    v1InfoVersionList: (params: RequestParams = {}) =>
      this.request<BasicResult, any>({
        path: `/api/v1/info/version`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Gets the current model display name.
     *
     * @tags api/v1
     * @name V1ModelList
     * @summary Retrieve the current model string
     * @request GET:/api/v1/model
     */
    v1ModelList: (params: RequestParams = {}) =>
      this.request<BasicResult, any>({
        path: `/api/v1/model`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve the actual max context length setting value set from the launcher
     *
     * @tags api/extra
     * @name ExtraTrueMaxContextLengthList
     * @summary Retrieve the actual max context length setting value set from the launcher
     * @request GET:/api/extra/true_max_context_length
     */
    extraTrueMaxContextLengthList: (params: RequestParams = {}) =>
      this.request<MaxContextLengthSetting, any>({
        path: `/api/extra/true_max_context_length`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve the KoboldCpp backend version
     *
     * @tags api/extra
     * @name ExtraVersionList
     * @summary Retrieve the KoboldCpp backend version
     * @request GET:/api/extra/version
     */
    extraVersionList: (params: RequestParams = {}) =>
      this.request<KcppVersion, any>({
        path: `/api/extra/version`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves the KoboldCpp preloaded story, --preloadstory configures a prepared story json save file to be hosted on the server, which frontends (such as Kobold Lite) can access over the API.
     *
     * @tags api/extra
     * @name ExtraPreloadstoryList
     * @summary Retrieves the KoboldCpp preloaded story
     * @request GET:/api/extra/preloadstory
     */
    extraPreloadstoryList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/extra/preloadstory`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve the KoboldCpp recent performance information
     *
     * @tags api/extra
     * @name ExtraPerfList
     * @summary Retrieve the KoboldCpp recent performance information
     * @request GET:/api/extra/perf
     */
    extraPerfList: (params: RequestParams = {}) =>
      this.request<KcppPerf, any>({
        path: `/api/extra/perf`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Generates text given a prompt and generation settings, with SSE streaming. Unspecified values are set to defaults. SSE streaming establishes a persistent connection, returning ongoing process in the form of message events. ``` event: message data: {data} ```
     *
     * @tags api/extra
     * @name ExtraGenerateStreamCreate
     * @summary Generate text with a specified prompt. SSE streamed results.
     * @request POST:/api/extra/generate/stream
     */
    extraGenerateStreamCreate: (
      data: GenerationInput,
      params: RequestParams = {}
    ) =>
      this.request<GenerationOutput, ServerBusyError>({
        path: `/api/extra/generate/stream`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Poll the incomplete results of the currently ongoing text generation. Will not work when multiple requests are in queue.
     *
     * @tags api/extra
     * @name ExtraGenerateCheckList
     * @summary Poll the incomplete results of the currently ongoing text generation.
     * @request GET:/api/extra/generate/check
     */
    extraGenerateCheckList: (params: RequestParams = {}) =>
      this.request<GenerationOutput, any>({
        path: `/api/extra/generate/check`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Poll the incomplete results of the currently ongoing text generation. A unique genkey previously submitted allows polling even in multiuser mode.
     *
     * @tags api/extra
     * @name ExtraGenerateCheckCreate
     * @summary Poll the incomplete results of the currently ongoing text generation. Supports multiuser mode.
     * @request POST:/api/extra/generate/check
     */
    extraGenerateCheckCreate: (
      data?: {
        /** A unique key used to identify this generation while it is in progress. */
        genkey?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GenerationOutput, any>({
        path: `/api/extra/generate/check`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Counts the number of tokens in a string.
     *
     * @tags api/extra
     * @name ExtraTokencountCreate
     * @summary Counts the number of tokens in a string.
     * @request POST:/api/extra/tokencount
     */
    extraTokencountCreate: (
      data: {
        /** The string to be tokenized. */
        prompt?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ValueResult, any>({
        path: `/api/extra/tokencount`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Aborts the currently ongoing text generation. Does not work when multiple requests are in queue.
     *
     * @tags api/extra
     * @name ExtraAbortCreate
     * @summary Aborts the currently ongoing text generation.
     * @request POST:/api/extra/abort
     */
    extraAbortCreate: (
      data?: {
        /** A unique key used to identify this generation while it is in progress. */
        genkey?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          /** Whether the abort was successful. */
          success?: boolean;
        },
        any
      >({
        path: `/api/extra/abort`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  sdapi = {
    /**
     * @description Gets a list of image generation models. For koboldcpp, only one model will be returned. If no model is loaded, the list is empty.
     *
     * @tags sdapi/v1
     * @name V1SdModelsList
     * @summary Gets a list of image generation models
     * @request GET:/sdapi/v1/sd-models
     */
    v1SdModelsList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sdapi/v1/sd-models`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Gets configuration info for image generation, used to get loaded model name in A1111.
     *
     * @tags sdapi/v1
     * @name V1OptionsList
     * @summary Gets configuration info for image generation
     * @request GET:/sdapi/v1/options
     */
    v1OptionsList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sdapi/v1/options`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a list of supported samplers.
     *
     * @tags sdapi/v1
     * @name V1SamplersList
     * @summary Gets a list of supported samplers
     * @request GET:/sdapi/v1/samplers
     */
    v1SamplersList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sdapi/v1/samplers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Generates an image from a text prompt, and returns a base64 encoded png.
     *
     * @tags sdapi/v1
     * @name V1Txt2ImgCreate
     * @summary Generates an image from a text prompt
     * @request POST:/sdapi/v1/txt2img
     */
    v1Txt2ImgCreate: (
      data?: {
        prompt?: string;
        negative_prompt?: string;
        cfg_scale?: number;
        steps?: number;
        width?: number;
        height?: number;
        seed?: number;
        sampler_name?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          /** A base64 string containing the encoded PNG of the generated image. */
          images?: string;
          /** Not used. Will be empty. */
          parameters?: object;
          /** Not used. Will be empty. */
          info?: string;
        },
        any
      >({
        path: `/sdapi/v1/txt2img`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Transforms an existing image into a new image, guided by a text prompt, and returns a base64 encoded png.
     *
     * @tags sdapi/v1
     * @name V1Img2ImgCreate
     * @summary Transforms an existing image into a new image
     * @request POST:/sdapi/v1/img2img
     */
    v1Img2ImgCreate: (
      data?: {
        prompt?: string;
        negative_prompt?: string;
        cfg_scale?: number;
        steps?: number;
        width?: number;
        height?: number;
        seed?: number;
        sampler_name?: string;
        denoising_strength?: number;
        init_images?: any[];
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          /** A base64 string containing the encoded PNG of the generated image. */
          images?: string;
          /** Not used. Will be empty. */
          parameters?: object;
          /** Not used. Will be empty. */
          info?: string;
        },
        any
      >({
        path: `/sdapi/v1/img2img`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Generates a short text caption describing an image.
     *
     * @tags sdapi/v1
     * @name V1InterrogateCreate
     * @summary Generates a short text caption describing an image
     * @request POST:/sdapi/v1/interrogate
     */
    v1InterrogateCreate: (
      data?: {
        /** A base64 string containing the encoded PNG of the image. */
        image?: string;
        /** Not used. */
        model?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          /** A short text description of the image. */
          caption?: string;
        },
        any
      >({
        path: `/sdapi/v1/interrogate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  v1 = {
    /**
     * @description Generates text continuations given a prompt. This is an OpenAI compatibility endpoint. Please refer to OpenAI documentation at [https://platform.openai.com/docs/api-reference/completions](https://platform.openai.com/docs/api-reference/completions)
     *
     * @tags v1
     * @name CompletionsCreate
     * @summary Generates text continuations given a prompt. Please refer to OpenAI documentation
     * @request POST:/v1/completions
     */
    completionsCreate: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/completions`,
        method: "POST",
        ...params,
      }),

    /**
     * @description Given a list of messages comprising a conversation, the model will return a response. This is an OpenAI compatibility endpoint. Please refer to OpenAI documentation at [https://platform.openai.com/docs/api-reference/chat](https://platform.openai.com/docs/api-reference/chat)
     *
     * @tags v1
     * @name ChatCompletionsCreate
     * @summary Generates a response from a list of messages. Please refer to OpenAI documentation
     * @request POST:/v1/chat/completions
     */
    chatCompletionsCreate: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/chat/completions`,
        method: "POST",
        ...params,
      }),

    /**
     * @description List and describe the various models available in the API. This is an OpenAI compatibility endpoint. Please refer to OpenAI documentation at [https://platform.openai.com/docs/api-reference/models](https://platform.openai.com/docs/api-reference/models)
     *
     * @tags v1
     * @name ModelsList
     * @summary List and describe the various models available in the API. Please refer to OpenAI documentation
     * @request GET:/v1/models
     */
    modelsList: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/models`,
        method: "GET",
        ...params,
      }),
  };
}
