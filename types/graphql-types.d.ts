export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 **/
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};

export type ContentfulAsset = ContentfulReference & Node & {
  contentful_id: Scalars['String'],
  id: Scalars['ID'],
  spaceId?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  file?: Maybe<ContentfulAssetFile>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  node_locale?: Maybe<Scalars['String']>,
  sys?: Maybe<ContentfulAssetSys>,
  fixed?: Maybe<ContentfulFixed>,
  resolutions?: Maybe<ContentfulResolutions>,
  fluid?: Maybe<ContentfulFluid>,
  sizes?: Maybe<ContentfulSizes>,
  resize?: Maybe<ContentfulResize>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ContentfulImageFormat>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ContentfulImageFormat>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ContentfulImageFormat>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ContentfulImageFormat>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  toFormat?: Maybe<ContentfulImageFormat>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulAssetEdge>,
  nodes: Array<ContentfulAsset>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulAssetGroupConnection>,
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulAssetFieldsEnum
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>,
  node: ContentfulAsset,
  previous?: Maybe<ContentfulAsset>,
};

export type ContentfulAssetFieldsEnum = 
  'contentful_id' |
  'id' |
  'spaceId' |
  'createdAt' |
  'updatedAt' |
  'file___url' |
  'file___details___size' |
  'file___details___image___width' |
  'file___details___image___height' |
  'file___fileName' |
  'file___contentType' |
  'title' |
  'description' |
  'node_locale' |
  'sys___type' |
  'sys___revision' |
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'resize___base64' |
  'resize___tracedSVG' |
  'resize___src' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>,
  details?: Maybe<ContentfulAssetFileDetails>,
  fileName?: Maybe<Scalars['String']>,
  contentType?: Maybe<Scalars['String']>,
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>,
  image?: Maybe<ContentfulAssetFileDetailsImage>,
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>,
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>,
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>,
  fileName?: Maybe<StringQueryOperatorInput>,
  contentType?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulAssetFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  file?: Maybe<ContentfulAssetFileFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  sys?: Maybe<ContentfulAssetSysFilterInput>,
  fixed?: Maybe<ContentfulFixedFilterInput>,
  resolutions?: Maybe<ContentfulResolutionsFilterInput>,
  fluid?: Maybe<ContentfulFluidFilterInput>,
  sizes?: Maybe<ContentfulSizesFilterInput>,
  resize?: Maybe<ContentfulResizeFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulAssetEdge>,
  nodes: Array<ContentfulAsset>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulAssetSys = {
  type?: Maybe<Scalars['String']>,
  revision?: Maybe<Scalars['Int']>,
};

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  revision?: Maybe<IntQueryOperatorInput>,
};

export type ContentfulBlogPost = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'],
  id: Scalars['ID'],
  node_locale: Scalars['String'],
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  publishDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  heroImage?: Maybe<ContentfulAsset>,
  author?: Maybe<ContentfulPerson>,
  description?: Maybe<ContentfulBlogPostDescriptionTextNode>,
  body?: Maybe<ContentfulBlogPostBodyTextNode>,
  spaceId?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  sys?: Maybe<ContentfulBlogPostSys>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNode>,
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNode>,
};


export type ContentfulBlogPostPublishDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulBlogPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulBlogPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulBlogPostBodyTextNode = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  body?: Maybe<Scalars['String']>,
  sys?: Maybe<ContentfulBlogPostBodyTextNodeSys>,
};

export type ContentfulBlogPostBodyTextNodeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulBlogPostBodyTextNodeEdge>,
  nodes: Array<ContentfulBlogPostBodyTextNode>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulBlogPostBodyTextNodeGroupConnection>,
};


export type ContentfulBlogPostBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostBodyTextNodeFieldsEnum
};


export type ContentfulBlogPostBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulBlogPostBodyTextNodeFieldsEnum
};

export type ContentfulBlogPostBodyTextNodeEdge = {
  next?: Maybe<ContentfulBlogPostBodyTextNode>,
  node: ContentfulBlogPostBodyTextNode,
  previous?: Maybe<ContentfulBlogPostBodyTextNode>,
};

export type ContentfulBlogPostBodyTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'body' |
  'sys___type';

export type ContentfulBlogPostBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  sys?: Maybe<ContentfulBlogPostBodyTextNodeSysFilterInput>,
};

export type ContentfulBlogPostBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulBlogPostBodyTextNodeEdge>,
  nodes: Array<ContentfulBlogPostBodyTextNode>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulBlogPostBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostBodyTextNodeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulBlogPostBodyTextNodeSys = {
  type?: Maybe<Scalars['String']>,
};

export type ContentfulBlogPostBodyTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulBlogPostConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulBlogPostEdge>,
  nodes: Array<ContentfulBlogPost>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulBlogPostGroupConnection>,
};


export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum
};


export type ContentfulBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulBlogPostFieldsEnum
};

export type ContentfulBlogPostDescriptionTextNode = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  description?: Maybe<Scalars['String']>,
  sys?: Maybe<ContentfulBlogPostDescriptionTextNodeSys>,
};

export type ContentfulBlogPostDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulBlogPostDescriptionTextNodeEdge>,
  nodes: Array<ContentfulBlogPostDescriptionTextNode>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulBlogPostDescriptionTextNodeGroupConnection>,
};


export type ContentfulBlogPostDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostDescriptionTextNodeFieldsEnum
};


export type ContentfulBlogPostDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulBlogPostDescriptionTextNodeFieldsEnum
};

export type ContentfulBlogPostDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulBlogPostDescriptionTextNode>,
  node: ContentfulBlogPostDescriptionTextNode,
  previous?: Maybe<ContentfulBlogPostDescriptionTextNode>,
};

export type ContentfulBlogPostDescriptionTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'description' |
  'sys___type';

export type ContentfulBlogPostDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  sys?: Maybe<ContentfulBlogPostDescriptionTextNodeSysFilterInput>,
};

export type ContentfulBlogPostDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulBlogPostDescriptionTextNodeEdge>,
  nodes: Array<ContentfulBlogPostDescriptionTextNode>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulBlogPostDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostDescriptionTextNodeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulBlogPostDescriptionTextNodeSys = {
  type?: Maybe<Scalars['String']>,
};

export type ContentfulBlogPostDescriptionTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulBlogPostEdge = {
  next?: Maybe<ContentfulBlogPost>,
  node: ContentfulBlogPost,
  previous?: Maybe<ContentfulBlogPost>,
};

export type ContentfulBlogPostFieldsEnum = 
  'contentful_id' |
  'id' |
  'node_locale' |
  'title' |
  'slug' |
  'publishDate' |
  'tags' |
  'heroImage___contentful_id' |
  'heroImage___id' |
  'heroImage___spaceId' |
  'heroImage___createdAt' |
  'heroImage___updatedAt' |
  'heroImage___file___url' |
  'heroImage___file___details___size' |
  'heroImage___file___fileName' |
  'heroImage___file___contentType' |
  'heroImage___title' |
  'heroImage___description' |
  'heroImage___node_locale' |
  'heroImage___sys___type' |
  'heroImage___sys___revision' |
  'heroImage___fixed___base64' |
  'heroImage___fixed___tracedSVG' |
  'heroImage___fixed___aspectRatio' |
  'heroImage___fixed___width' |
  'heroImage___fixed___height' |
  'heroImage___fixed___src' |
  'heroImage___fixed___srcSet' |
  'heroImage___fixed___srcWebp' |
  'heroImage___fixed___srcSetWebp' |
  'heroImage___resolutions___base64' |
  'heroImage___resolutions___tracedSVG' |
  'heroImage___resolutions___aspectRatio' |
  'heroImage___resolutions___width' |
  'heroImage___resolutions___height' |
  'heroImage___resolutions___src' |
  'heroImage___resolutions___srcSet' |
  'heroImage___resolutions___srcWebp' |
  'heroImage___resolutions___srcSetWebp' |
  'heroImage___fluid___base64' |
  'heroImage___fluid___tracedSVG' |
  'heroImage___fluid___aspectRatio' |
  'heroImage___fluid___src' |
  'heroImage___fluid___srcSet' |
  'heroImage___fluid___srcWebp' |
  'heroImage___fluid___srcSetWebp' |
  'heroImage___fluid___sizes' |
  'heroImage___sizes___base64' |
  'heroImage___sizes___tracedSVG' |
  'heroImage___sizes___aspectRatio' |
  'heroImage___sizes___src' |
  'heroImage___sizes___srcSet' |
  'heroImage___sizes___srcWebp' |
  'heroImage___sizes___srcSetWebp' |
  'heroImage___sizes___sizes' |
  'heroImage___resize___base64' |
  'heroImage___resize___tracedSVG' |
  'heroImage___resize___src' |
  'heroImage___resize___width' |
  'heroImage___resize___height' |
  'heroImage___resize___aspectRatio' |
  'heroImage___parent___id' |
  'heroImage___parent___parent___id' |
  'heroImage___parent___parent___children' |
  'heroImage___parent___children' |
  'heroImage___parent___children___id' |
  'heroImage___parent___children___children' |
  'heroImage___parent___internal___content' |
  'heroImage___parent___internal___contentDigest' |
  'heroImage___parent___internal___description' |
  'heroImage___parent___internal___fieldOwners' |
  'heroImage___parent___internal___ignoreType' |
  'heroImage___parent___internal___mediaType' |
  'heroImage___parent___internal___owner' |
  'heroImage___parent___internal___type' |
  'heroImage___children' |
  'heroImage___children___id' |
  'heroImage___children___parent___id' |
  'heroImage___children___parent___children' |
  'heroImage___children___children' |
  'heroImage___children___children___id' |
  'heroImage___children___children___children' |
  'heroImage___children___internal___content' |
  'heroImage___children___internal___contentDigest' |
  'heroImage___children___internal___description' |
  'heroImage___children___internal___fieldOwners' |
  'heroImage___children___internal___ignoreType' |
  'heroImage___children___internal___mediaType' |
  'heroImage___children___internal___owner' |
  'heroImage___children___internal___type' |
  'heroImage___internal___content' |
  'heroImage___internal___contentDigest' |
  'heroImage___internal___description' |
  'heroImage___internal___fieldOwners' |
  'heroImage___internal___ignoreType' |
  'heroImage___internal___mediaType' |
  'heroImage___internal___owner' |
  'heroImage___internal___type' |
  'author___contentful_id' |
  'author___id' |
  'author___node_locale' |
  'author___name' |
  'author___title' |
  'author___company' |
  'author___email' |
  'author___phone' |
  'author___facebook' |
  'author___twitter' |
  'author___github' |
  'author___image___contentful_id' |
  'author___image___id' |
  'author___image___spaceId' |
  'author___image___createdAt' |
  'author___image___updatedAt' |
  'author___image___file___url' |
  'author___image___file___fileName' |
  'author___image___file___contentType' |
  'author___image___title' |
  'author___image___description' |
  'author___image___node_locale' |
  'author___image___sys___type' |
  'author___image___sys___revision' |
  'author___image___fixed___base64' |
  'author___image___fixed___tracedSVG' |
  'author___image___fixed___aspectRatio' |
  'author___image___fixed___width' |
  'author___image___fixed___height' |
  'author___image___fixed___src' |
  'author___image___fixed___srcSet' |
  'author___image___fixed___srcWebp' |
  'author___image___fixed___srcSetWebp' |
  'author___image___resolutions___base64' |
  'author___image___resolutions___tracedSVG' |
  'author___image___resolutions___aspectRatio' |
  'author___image___resolutions___width' |
  'author___image___resolutions___height' |
  'author___image___resolutions___src' |
  'author___image___resolutions___srcSet' |
  'author___image___resolutions___srcWebp' |
  'author___image___resolutions___srcSetWebp' |
  'author___image___fluid___base64' |
  'author___image___fluid___tracedSVG' |
  'author___image___fluid___aspectRatio' |
  'author___image___fluid___src' |
  'author___image___fluid___srcSet' |
  'author___image___fluid___srcWebp' |
  'author___image___fluid___srcSetWebp' |
  'author___image___fluid___sizes' |
  'author___image___sizes___base64' |
  'author___image___sizes___tracedSVG' |
  'author___image___sizes___aspectRatio' |
  'author___image___sizes___src' |
  'author___image___sizes___srcSet' |
  'author___image___sizes___srcWebp' |
  'author___image___sizes___srcSetWebp' |
  'author___image___sizes___sizes' |
  'author___image___resize___base64' |
  'author___image___resize___tracedSVG' |
  'author___image___resize___src' |
  'author___image___resize___width' |
  'author___image___resize___height' |
  'author___image___resize___aspectRatio' |
  'author___image___parent___id' |
  'author___image___parent___children' |
  'author___image___children' |
  'author___image___children___id' |
  'author___image___children___children' |
  'author___image___internal___content' |
  'author___image___internal___contentDigest' |
  'author___image___internal___description' |
  'author___image___internal___fieldOwners' |
  'author___image___internal___ignoreType' |
  'author___image___internal___mediaType' |
  'author___image___internal___owner' |
  'author___image___internal___type' |
  'author___blog_post' |
  'author___blog_post___contentful_id' |
  'author___blog_post___id' |
  'author___blog_post___node_locale' |
  'author___blog_post___title' |
  'author___blog_post___slug' |
  'author___blog_post___publishDate' |
  'author___blog_post___tags' |
  'author___blog_post___heroImage___contentful_id' |
  'author___blog_post___heroImage___id' |
  'author___blog_post___heroImage___spaceId' |
  'author___blog_post___heroImage___createdAt' |
  'author___blog_post___heroImage___updatedAt' |
  'author___blog_post___heroImage___title' |
  'author___blog_post___heroImage___description' |
  'author___blog_post___heroImage___node_locale' |
  'author___blog_post___heroImage___children' |
  'author___blog_post___author___contentful_id' |
  'author___blog_post___author___id' |
  'author___blog_post___author___node_locale' |
  'author___blog_post___author___name' |
  'author___blog_post___author___title' |
  'author___blog_post___author___company' |
  'author___blog_post___author___email' |
  'author___blog_post___author___phone' |
  'author___blog_post___author___facebook' |
  'author___blog_post___author___twitter' |
  'author___blog_post___author___github' |
  'author___blog_post___author___blog_post' |
  'author___blog_post___author___spaceId' |
  'author___blog_post___author___createdAt' |
  'author___blog_post___author___updatedAt' |
  'author___blog_post___author___children' |
  'author___blog_post___description___id' |
  'author___blog_post___description___children' |
  'author___blog_post___description___description' |
  'author___blog_post___body___id' |
  'author___blog_post___body___children' |
  'author___blog_post___body___body' |
  'author___blog_post___spaceId' |
  'author___blog_post___createdAt' |
  'author___blog_post___updatedAt' |
  'author___blog_post___sys___type' |
  'author___blog_post___sys___revision' |
  'author___blog_post___parent___id' |
  'author___blog_post___parent___children' |
  'author___blog_post___children' |
  'author___blog_post___children___id' |
  'author___blog_post___children___children' |
  'author___blog_post___internal___content' |
  'author___blog_post___internal___contentDigest' |
  'author___blog_post___internal___description' |
  'author___blog_post___internal___fieldOwners' |
  'author___blog_post___internal___ignoreType' |
  'author___blog_post___internal___mediaType' |
  'author___blog_post___internal___owner' |
  'author___blog_post___internal___type' |
  'author___blog_post___childContentfulBlogPostDescriptionTextNode___id' |
  'author___blog_post___childContentfulBlogPostDescriptionTextNode___children' |
  'author___blog_post___childContentfulBlogPostDescriptionTextNode___description' |
  'author___blog_post___childContentfulBlogPostBodyTextNode___id' |
  'author___blog_post___childContentfulBlogPostBodyTextNode___children' |
  'author___blog_post___childContentfulBlogPostBodyTextNode___body' |
  'author___shortBio___id' |
  'author___shortBio___parent___id' |
  'author___shortBio___parent___children' |
  'author___shortBio___children' |
  'author___shortBio___children___id' |
  'author___shortBio___children___children' |
  'author___shortBio___internal___content' |
  'author___shortBio___internal___contentDigest' |
  'author___shortBio___internal___description' |
  'author___shortBio___internal___fieldOwners' |
  'author___shortBio___internal___ignoreType' |
  'author___shortBio___internal___mediaType' |
  'author___shortBio___internal___owner' |
  'author___shortBio___internal___type' |
  'author___shortBio___shortBio' |
  'author___shortBio___sys___type' |
  'author___spaceId' |
  'author___createdAt' |
  'author___updatedAt' |
  'author___sys___type' |
  'author___sys___revision' |
  'author___parent___id' |
  'author___parent___parent___id' |
  'author___parent___parent___children' |
  'author___parent___children' |
  'author___parent___children___id' |
  'author___parent___children___children' |
  'author___parent___internal___content' |
  'author___parent___internal___contentDigest' |
  'author___parent___internal___description' |
  'author___parent___internal___fieldOwners' |
  'author___parent___internal___ignoreType' |
  'author___parent___internal___mediaType' |
  'author___parent___internal___owner' |
  'author___parent___internal___type' |
  'author___children' |
  'author___children___id' |
  'author___children___parent___id' |
  'author___children___parent___children' |
  'author___children___children' |
  'author___children___children___id' |
  'author___children___children___children' |
  'author___children___internal___content' |
  'author___children___internal___contentDigest' |
  'author___children___internal___description' |
  'author___children___internal___fieldOwners' |
  'author___children___internal___ignoreType' |
  'author___children___internal___mediaType' |
  'author___children___internal___owner' |
  'author___children___internal___type' |
  'author___internal___content' |
  'author___internal___contentDigest' |
  'author___internal___description' |
  'author___internal___fieldOwners' |
  'author___internal___ignoreType' |
  'author___internal___mediaType' |
  'author___internal___owner' |
  'author___internal___type' |
  'author___childContentfulPersonShortBioTextNode___id' |
  'author___childContentfulPersonShortBioTextNode___parent___id' |
  'author___childContentfulPersonShortBioTextNode___parent___children' |
  'author___childContentfulPersonShortBioTextNode___children' |
  'author___childContentfulPersonShortBioTextNode___children___id' |
  'author___childContentfulPersonShortBioTextNode___children___children' |
  'author___childContentfulPersonShortBioTextNode___internal___content' |
  'author___childContentfulPersonShortBioTextNode___internal___contentDigest' |
  'author___childContentfulPersonShortBioTextNode___internal___description' |
  'author___childContentfulPersonShortBioTextNode___internal___fieldOwners' |
  'author___childContentfulPersonShortBioTextNode___internal___ignoreType' |
  'author___childContentfulPersonShortBioTextNode___internal___mediaType' |
  'author___childContentfulPersonShortBioTextNode___internal___owner' |
  'author___childContentfulPersonShortBioTextNode___internal___type' |
  'author___childContentfulPersonShortBioTextNode___shortBio' |
  'author___childContentfulPersonShortBioTextNode___sys___type' |
  'description___id' |
  'description___parent___id' |
  'description___parent___parent___id' |
  'description___parent___parent___children' |
  'description___parent___children' |
  'description___parent___children___id' |
  'description___parent___children___children' |
  'description___parent___internal___content' |
  'description___parent___internal___contentDigest' |
  'description___parent___internal___description' |
  'description___parent___internal___fieldOwners' |
  'description___parent___internal___ignoreType' |
  'description___parent___internal___mediaType' |
  'description___parent___internal___owner' |
  'description___parent___internal___type' |
  'description___children' |
  'description___children___id' |
  'description___children___parent___id' |
  'description___children___parent___children' |
  'description___children___children' |
  'description___children___children___id' |
  'description___children___children___children' |
  'description___children___internal___content' |
  'description___children___internal___contentDigest' |
  'description___children___internal___description' |
  'description___children___internal___fieldOwners' |
  'description___children___internal___ignoreType' |
  'description___children___internal___mediaType' |
  'description___children___internal___owner' |
  'description___children___internal___type' |
  'description___internal___content' |
  'description___internal___contentDigest' |
  'description___internal___description' |
  'description___internal___fieldOwners' |
  'description___internal___ignoreType' |
  'description___internal___mediaType' |
  'description___internal___owner' |
  'description___internal___type' |
  'description___description' |
  'description___sys___type' |
  'body___id' |
  'body___parent___id' |
  'body___parent___parent___id' |
  'body___parent___parent___children' |
  'body___parent___children' |
  'body___parent___children___id' |
  'body___parent___children___children' |
  'body___parent___internal___content' |
  'body___parent___internal___contentDigest' |
  'body___parent___internal___description' |
  'body___parent___internal___fieldOwners' |
  'body___parent___internal___ignoreType' |
  'body___parent___internal___mediaType' |
  'body___parent___internal___owner' |
  'body___parent___internal___type' |
  'body___children' |
  'body___children___id' |
  'body___children___parent___id' |
  'body___children___parent___children' |
  'body___children___children' |
  'body___children___children___id' |
  'body___children___children___children' |
  'body___children___internal___content' |
  'body___children___internal___contentDigest' |
  'body___children___internal___description' |
  'body___children___internal___fieldOwners' |
  'body___children___internal___ignoreType' |
  'body___children___internal___mediaType' |
  'body___children___internal___owner' |
  'body___children___internal___type' |
  'body___internal___content' |
  'body___internal___contentDigest' |
  'body___internal___description' |
  'body___internal___fieldOwners' |
  'body___internal___ignoreType' |
  'body___internal___mediaType' |
  'body___internal___owner' |
  'body___internal___type' |
  'body___body' |
  'body___sys___type' |
  'spaceId' |
  'createdAt' |
  'updatedAt' |
  'sys___type' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'childContentfulBlogPostDescriptionTextNode___id' |
  'childContentfulBlogPostDescriptionTextNode___parent___id' |
  'childContentfulBlogPostDescriptionTextNode___parent___parent___id' |
  'childContentfulBlogPostDescriptionTextNode___parent___parent___children' |
  'childContentfulBlogPostDescriptionTextNode___parent___children' |
  'childContentfulBlogPostDescriptionTextNode___parent___children___id' |
  'childContentfulBlogPostDescriptionTextNode___parent___children___children' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___content' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___contentDigest' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___description' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___fieldOwners' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___ignoreType' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___mediaType' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___owner' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___type' |
  'childContentfulBlogPostDescriptionTextNode___children' |
  'childContentfulBlogPostDescriptionTextNode___children___id' |
  'childContentfulBlogPostDescriptionTextNode___children___parent___id' |
  'childContentfulBlogPostDescriptionTextNode___children___parent___children' |
  'childContentfulBlogPostDescriptionTextNode___children___children' |
  'childContentfulBlogPostDescriptionTextNode___children___children___id' |
  'childContentfulBlogPostDescriptionTextNode___children___children___children' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___content' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___contentDigest' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___description' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___fieldOwners' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___ignoreType' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___mediaType' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___owner' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___type' |
  'childContentfulBlogPostDescriptionTextNode___internal___content' |
  'childContentfulBlogPostDescriptionTextNode___internal___contentDigest' |
  'childContentfulBlogPostDescriptionTextNode___internal___description' |
  'childContentfulBlogPostDescriptionTextNode___internal___fieldOwners' |
  'childContentfulBlogPostDescriptionTextNode___internal___ignoreType' |
  'childContentfulBlogPostDescriptionTextNode___internal___mediaType' |
  'childContentfulBlogPostDescriptionTextNode___internal___owner' |
  'childContentfulBlogPostDescriptionTextNode___internal___type' |
  'childContentfulBlogPostDescriptionTextNode___description' |
  'childContentfulBlogPostDescriptionTextNode___sys___type' |
  'childContentfulBlogPostBodyTextNode___id' |
  'childContentfulBlogPostBodyTextNode___parent___id' |
  'childContentfulBlogPostBodyTextNode___parent___parent___id' |
  'childContentfulBlogPostBodyTextNode___parent___parent___children' |
  'childContentfulBlogPostBodyTextNode___parent___children' |
  'childContentfulBlogPostBodyTextNode___parent___children___id' |
  'childContentfulBlogPostBodyTextNode___parent___children___children' |
  'childContentfulBlogPostBodyTextNode___parent___internal___content' |
  'childContentfulBlogPostBodyTextNode___parent___internal___contentDigest' |
  'childContentfulBlogPostBodyTextNode___parent___internal___description' |
  'childContentfulBlogPostBodyTextNode___parent___internal___fieldOwners' |
  'childContentfulBlogPostBodyTextNode___parent___internal___ignoreType' |
  'childContentfulBlogPostBodyTextNode___parent___internal___mediaType' |
  'childContentfulBlogPostBodyTextNode___parent___internal___owner' |
  'childContentfulBlogPostBodyTextNode___parent___internal___type' |
  'childContentfulBlogPostBodyTextNode___children' |
  'childContentfulBlogPostBodyTextNode___children___id' |
  'childContentfulBlogPostBodyTextNode___children___parent___id' |
  'childContentfulBlogPostBodyTextNode___children___parent___children' |
  'childContentfulBlogPostBodyTextNode___children___children' |
  'childContentfulBlogPostBodyTextNode___children___children___id' |
  'childContentfulBlogPostBodyTextNode___children___children___children' |
  'childContentfulBlogPostBodyTextNode___children___internal___content' |
  'childContentfulBlogPostBodyTextNode___children___internal___contentDigest' |
  'childContentfulBlogPostBodyTextNode___children___internal___description' |
  'childContentfulBlogPostBodyTextNode___children___internal___fieldOwners' |
  'childContentfulBlogPostBodyTextNode___children___internal___ignoreType' |
  'childContentfulBlogPostBodyTextNode___children___internal___mediaType' |
  'childContentfulBlogPostBodyTextNode___children___internal___owner' |
  'childContentfulBlogPostBodyTextNode___children___internal___type' |
  'childContentfulBlogPostBodyTextNode___internal___content' |
  'childContentfulBlogPostBodyTextNode___internal___contentDigest' |
  'childContentfulBlogPostBodyTextNode___internal___description' |
  'childContentfulBlogPostBodyTextNode___internal___fieldOwners' |
  'childContentfulBlogPostBodyTextNode___internal___ignoreType' |
  'childContentfulBlogPostBodyTextNode___internal___mediaType' |
  'childContentfulBlogPostBodyTextNode___internal___owner' |
  'childContentfulBlogPostBodyTextNode___internal___type' |
  'childContentfulBlogPostBodyTextNode___body' |
  'childContentfulBlogPostBodyTextNode___sys___type';

export type ContentfulBlogPostFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  publishDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  heroImage?: Maybe<ContentfulAssetFilterInput>,
  author?: Maybe<ContentfulPersonFilterInput>,
  description?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>,
  body?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulBlogPostSysFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>,
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>,
};

export type ContentfulBlogPostFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostFilterInput>,
};

export type ContentfulBlogPostGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulBlogPostEdge>,
  nodes: Array<ContentfulBlogPost>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulBlogPostSys = {
  type?: Maybe<Scalars['String']>,
  revision?: Maybe<Scalars['Int']>,
  contentType?: Maybe<ContentfulBlogPostSysContentType>,
};

export type ContentfulBlogPostSysContentType = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSys>,
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>,
};

export type ContentfulBlogPostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulBlogPostSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  revision?: Maybe<IntQueryOperatorInput>,
  contentType?: Maybe<ContentfulBlogPostSysContentTypeFilterInput>,
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  displayField?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  sys?: Maybe<ContentfulContentTypeSys>,
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulContentTypeEdge>,
  nodes: Array<ContentfulContentType>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulContentTypeGroupConnection>,
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulContentTypeFieldsEnum
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>,
  node: ContentfulContentType,
  previous?: Maybe<ContentfulContentType>,
};

export type ContentfulContentTypeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'name' |
  'displayField' |
  'description' |
  'sys___type';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  displayField?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  sys?: Maybe<ContentfulContentTypeSysFilterInput>,
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulContentTypeEdge>,
  nodes: Array<ContentfulContentType>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>,
};

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulEntry = {
  contentful_id: Scalars['String'],
  id: Scalars['ID'],
  node_locale: Scalars['String'],
};

export type ContentfulEntryConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulEntryEdge>,
  nodes: Array<ContentfulEntry>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulEntryGroupConnection>,
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulEntryFieldsEnum
};

export type ContentfulEntryEdge = {
  next?: Maybe<ContentfulEntry>,
  node: ContentfulEntry,
  previous?: Maybe<ContentfulEntry>,
};

export type ContentfulEntryFieldsEnum = 
  'contentful_id' |
  'id' |
  'node_locale';

export type ContentfulEntryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulEntryGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulEntryEdge>,
  nodes: Array<ContentfulEntry>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulEntrySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulImageCropFocus = 
  'TOP' |
  'TOP_LEFT' |
  'TOP_RIGHT' |
  'BOTTOM' |
  'BOTTOM_RIGHT' |
  'BOTTOM_LEFT' |
  'RIGHT' |
  'LEFT' |
  'FACE' |
  'FACES' |
  'CENTER';

export type ContentfulImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ContentfulPerson = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'],
  id: Scalars['ID'],
  node_locale: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  facebook?: Maybe<Scalars['String']>,
  twitter?: Maybe<Scalars['String']>,
  github?: Maybe<Scalars['String']>,
  image?: Maybe<ContentfulAsset>,
  blog_post?: Maybe<Array<Maybe<ContentfulBlogPost>>>,
  shortBio?: Maybe<ContentfulPersonShortBioTextNode>,
  spaceId?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  sys?: Maybe<ContentfulPersonSys>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNode>,
};


export type ContentfulPersonCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulPersonUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulPersonConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulPersonEdge>,
  nodes: Array<ContentfulPerson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulPersonGroupConnection>,
};


export type ContentfulPersonConnectionDistinctArgs = {
  field: ContentfulPersonFieldsEnum
};


export type ContentfulPersonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulPersonFieldsEnum
};

export type ContentfulPersonEdge = {
  next?: Maybe<ContentfulPerson>,
  node: ContentfulPerson,
  previous?: Maybe<ContentfulPerson>,
};

export type ContentfulPersonFieldsEnum = 
  'contentful_id' |
  'id' |
  'node_locale' |
  'name' |
  'title' |
  'company' |
  'email' |
  'phone' |
  'facebook' |
  'twitter' |
  'github' |
  'image___contentful_id' |
  'image___id' |
  'image___spaceId' |
  'image___createdAt' |
  'image___updatedAt' |
  'image___file___url' |
  'image___file___details___size' |
  'image___file___fileName' |
  'image___file___contentType' |
  'image___title' |
  'image___description' |
  'image___node_locale' |
  'image___sys___type' |
  'image___sys___revision' |
  'image___fixed___base64' |
  'image___fixed___tracedSVG' |
  'image___fixed___aspectRatio' |
  'image___fixed___width' |
  'image___fixed___height' |
  'image___fixed___src' |
  'image___fixed___srcSet' |
  'image___fixed___srcWebp' |
  'image___fixed___srcSetWebp' |
  'image___resolutions___base64' |
  'image___resolutions___tracedSVG' |
  'image___resolutions___aspectRatio' |
  'image___resolutions___width' |
  'image___resolutions___height' |
  'image___resolutions___src' |
  'image___resolutions___srcSet' |
  'image___resolutions___srcWebp' |
  'image___resolutions___srcSetWebp' |
  'image___fluid___base64' |
  'image___fluid___tracedSVG' |
  'image___fluid___aspectRatio' |
  'image___fluid___src' |
  'image___fluid___srcSet' |
  'image___fluid___srcWebp' |
  'image___fluid___srcSetWebp' |
  'image___fluid___sizes' |
  'image___sizes___base64' |
  'image___sizes___tracedSVG' |
  'image___sizes___aspectRatio' |
  'image___sizes___src' |
  'image___sizes___srcSet' |
  'image___sizes___srcWebp' |
  'image___sizes___srcSetWebp' |
  'image___sizes___sizes' |
  'image___resize___base64' |
  'image___resize___tracedSVG' |
  'image___resize___src' |
  'image___resize___width' |
  'image___resize___height' |
  'image___resize___aspectRatio' |
  'image___parent___id' |
  'image___parent___parent___id' |
  'image___parent___parent___children' |
  'image___parent___children' |
  'image___parent___children___id' |
  'image___parent___children___children' |
  'image___parent___internal___content' |
  'image___parent___internal___contentDigest' |
  'image___parent___internal___description' |
  'image___parent___internal___fieldOwners' |
  'image___parent___internal___ignoreType' |
  'image___parent___internal___mediaType' |
  'image___parent___internal___owner' |
  'image___parent___internal___type' |
  'image___children' |
  'image___children___id' |
  'image___children___parent___id' |
  'image___children___parent___children' |
  'image___children___children' |
  'image___children___children___id' |
  'image___children___children___children' |
  'image___children___internal___content' |
  'image___children___internal___contentDigest' |
  'image___children___internal___description' |
  'image___children___internal___fieldOwners' |
  'image___children___internal___ignoreType' |
  'image___children___internal___mediaType' |
  'image___children___internal___owner' |
  'image___children___internal___type' |
  'image___internal___content' |
  'image___internal___contentDigest' |
  'image___internal___description' |
  'image___internal___fieldOwners' |
  'image___internal___ignoreType' |
  'image___internal___mediaType' |
  'image___internal___owner' |
  'image___internal___type' |
  'blog_post' |
  'blog_post___contentful_id' |
  'blog_post___id' |
  'blog_post___node_locale' |
  'blog_post___title' |
  'blog_post___slug' |
  'blog_post___publishDate' |
  'blog_post___tags' |
  'blog_post___heroImage___contentful_id' |
  'blog_post___heroImage___id' |
  'blog_post___heroImage___spaceId' |
  'blog_post___heroImage___createdAt' |
  'blog_post___heroImage___updatedAt' |
  'blog_post___heroImage___file___url' |
  'blog_post___heroImage___file___fileName' |
  'blog_post___heroImage___file___contentType' |
  'blog_post___heroImage___title' |
  'blog_post___heroImage___description' |
  'blog_post___heroImage___node_locale' |
  'blog_post___heroImage___sys___type' |
  'blog_post___heroImage___sys___revision' |
  'blog_post___heroImage___fixed___base64' |
  'blog_post___heroImage___fixed___tracedSVG' |
  'blog_post___heroImage___fixed___aspectRatio' |
  'blog_post___heroImage___fixed___width' |
  'blog_post___heroImage___fixed___height' |
  'blog_post___heroImage___fixed___src' |
  'blog_post___heroImage___fixed___srcSet' |
  'blog_post___heroImage___fixed___srcWebp' |
  'blog_post___heroImage___fixed___srcSetWebp' |
  'blog_post___heroImage___resolutions___base64' |
  'blog_post___heroImage___resolutions___tracedSVG' |
  'blog_post___heroImage___resolutions___aspectRatio' |
  'blog_post___heroImage___resolutions___width' |
  'blog_post___heroImage___resolutions___height' |
  'blog_post___heroImage___resolutions___src' |
  'blog_post___heroImage___resolutions___srcSet' |
  'blog_post___heroImage___resolutions___srcWebp' |
  'blog_post___heroImage___resolutions___srcSetWebp' |
  'blog_post___heroImage___fluid___base64' |
  'blog_post___heroImage___fluid___tracedSVG' |
  'blog_post___heroImage___fluid___aspectRatio' |
  'blog_post___heroImage___fluid___src' |
  'blog_post___heroImage___fluid___srcSet' |
  'blog_post___heroImage___fluid___srcWebp' |
  'blog_post___heroImage___fluid___srcSetWebp' |
  'blog_post___heroImage___fluid___sizes' |
  'blog_post___heroImage___sizes___base64' |
  'blog_post___heroImage___sizes___tracedSVG' |
  'blog_post___heroImage___sizes___aspectRatio' |
  'blog_post___heroImage___sizes___src' |
  'blog_post___heroImage___sizes___srcSet' |
  'blog_post___heroImage___sizes___srcWebp' |
  'blog_post___heroImage___sizes___srcSetWebp' |
  'blog_post___heroImage___sizes___sizes' |
  'blog_post___heroImage___resize___base64' |
  'blog_post___heroImage___resize___tracedSVG' |
  'blog_post___heroImage___resize___src' |
  'blog_post___heroImage___resize___width' |
  'blog_post___heroImage___resize___height' |
  'blog_post___heroImage___resize___aspectRatio' |
  'blog_post___heroImage___parent___id' |
  'blog_post___heroImage___parent___children' |
  'blog_post___heroImage___children' |
  'blog_post___heroImage___children___id' |
  'blog_post___heroImage___children___children' |
  'blog_post___heroImage___internal___content' |
  'blog_post___heroImage___internal___contentDigest' |
  'blog_post___heroImage___internal___description' |
  'blog_post___heroImage___internal___fieldOwners' |
  'blog_post___heroImage___internal___ignoreType' |
  'blog_post___heroImage___internal___mediaType' |
  'blog_post___heroImage___internal___owner' |
  'blog_post___heroImage___internal___type' |
  'blog_post___author___contentful_id' |
  'blog_post___author___id' |
  'blog_post___author___node_locale' |
  'blog_post___author___name' |
  'blog_post___author___title' |
  'blog_post___author___company' |
  'blog_post___author___email' |
  'blog_post___author___phone' |
  'blog_post___author___facebook' |
  'blog_post___author___twitter' |
  'blog_post___author___github' |
  'blog_post___author___image___contentful_id' |
  'blog_post___author___image___id' |
  'blog_post___author___image___spaceId' |
  'blog_post___author___image___createdAt' |
  'blog_post___author___image___updatedAt' |
  'blog_post___author___image___title' |
  'blog_post___author___image___description' |
  'blog_post___author___image___node_locale' |
  'blog_post___author___image___children' |
  'blog_post___author___blog_post' |
  'blog_post___author___blog_post___contentful_id' |
  'blog_post___author___blog_post___id' |
  'blog_post___author___blog_post___node_locale' |
  'blog_post___author___blog_post___title' |
  'blog_post___author___blog_post___slug' |
  'blog_post___author___blog_post___publishDate' |
  'blog_post___author___blog_post___tags' |
  'blog_post___author___blog_post___spaceId' |
  'blog_post___author___blog_post___createdAt' |
  'blog_post___author___blog_post___updatedAt' |
  'blog_post___author___blog_post___children' |
  'blog_post___author___shortBio___id' |
  'blog_post___author___shortBio___children' |
  'blog_post___author___shortBio___shortBio' |
  'blog_post___author___spaceId' |
  'blog_post___author___createdAt' |
  'blog_post___author___updatedAt' |
  'blog_post___author___sys___type' |
  'blog_post___author___sys___revision' |
  'blog_post___author___parent___id' |
  'blog_post___author___parent___children' |
  'blog_post___author___children' |
  'blog_post___author___children___id' |
  'blog_post___author___children___children' |
  'blog_post___author___internal___content' |
  'blog_post___author___internal___contentDigest' |
  'blog_post___author___internal___description' |
  'blog_post___author___internal___fieldOwners' |
  'blog_post___author___internal___ignoreType' |
  'blog_post___author___internal___mediaType' |
  'blog_post___author___internal___owner' |
  'blog_post___author___internal___type' |
  'blog_post___author___childContentfulPersonShortBioTextNode___id' |
  'blog_post___author___childContentfulPersonShortBioTextNode___children' |
  'blog_post___author___childContentfulPersonShortBioTextNode___shortBio' |
  'blog_post___description___id' |
  'blog_post___description___parent___id' |
  'blog_post___description___parent___children' |
  'blog_post___description___children' |
  'blog_post___description___children___id' |
  'blog_post___description___children___children' |
  'blog_post___description___internal___content' |
  'blog_post___description___internal___contentDigest' |
  'blog_post___description___internal___description' |
  'blog_post___description___internal___fieldOwners' |
  'blog_post___description___internal___ignoreType' |
  'blog_post___description___internal___mediaType' |
  'blog_post___description___internal___owner' |
  'blog_post___description___internal___type' |
  'blog_post___description___description' |
  'blog_post___description___sys___type' |
  'blog_post___body___id' |
  'blog_post___body___parent___id' |
  'blog_post___body___parent___children' |
  'blog_post___body___children' |
  'blog_post___body___children___id' |
  'blog_post___body___children___children' |
  'blog_post___body___internal___content' |
  'blog_post___body___internal___contentDigest' |
  'blog_post___body___internal___description' |
  'blog_post___body___internal___fieldOwners' |
  'blog_post___body___internal___ignoreType' |
  'blog_post___body___internal___mediaType' |
  'blog_post___body___internal___owner' |
  'blog_post___body___internal___type' |
  'blog_post___body___body' |
  'blog_post___body___sys___type' |
  'blog_post___spaceId' |
  'blog_post___createdAt' |
  'blog_post___updatedAt' |
  'blog_post___sys___type' |
  'blog_post___sys___revision' |
  'blog_post___parent___id' |
  'blog_post___parent___parent___id' |
  'blog_post___parent___parent___children' |
  'blog_post___parent___children' |
  'blog_post___parent___children___id' |
  'blog_post___parent___children___children' |
  'blog_post___parent___internal___content' |
  'blog_post___parent___internal___contentDigest' |
  'blog_post___parent___internal___description' |
  'blog_post___parent___internal___fieldOwners' |
  'blog_post___parent___internal___ignoreType' |
  'blog_post___parent___internal___mediaType' |
  'blog_post___parent___internal___owner' |
  'blog_post___parent___internal___type' |
  'blog_post___children' |
  'blog_post___children___id' |
  'blog_post___children___parent___id' |
  'blog_post___children___parent___children' |
  'blog_post___children___children' |
  'blog_post___children___children___id' |
  'blog_post___children___children___children' |
  'blog_post___children___internal___content' |
  'blog_post___children___internal___contentDigest' |
  'blog_post___children___internal___description' |
  'blog_post___children___internal___fieldOwners' |
  'blog_post___children___internal___ignoreType' |
  'blog_post___children___internal___mediaType' |
  'blog_post___children___internal___owner' |
  'blog_post___children___internal___type' |
  'blog_post___internal___content' |
  'blog_post___internal___contentDigest' |
  'blog_post___internal___description' |
  'blog_post___internal___fieldOwners' |
  'blog_post___internal___ignoreType' |
  'blog_post___internal___mediaType' |
  'blog_post___internal___owner' |
  'blog_post___internal___type' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___id' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___parent___id' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___parent___children' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___children' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___children___id' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___children___children' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___internal___content' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___internal___contentDigest' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___internal___description' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___internal___fieldOwners' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___internal___ignoreType' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___internal___mediaType' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___internal___owner' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___internal___type' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___description' |
  'blog_post___childContentfulBlogPostDescriptionTextNode___sys___type' |
  'blog_post___childContentfulBlogPostBodyTextNode___id' |
  'blog_post___childContentfulBlogPostBodyTextNode___parent___id' |
  'blog_post___childContentfulBlogPostBodyTextNode___parent___children' |
  'blog_post___childContentfulBlogPostBodyTextNode___children' |
  'blog_post___childContentfulBlogPostBodyTextNode___children___id' |
  'blog_post___childContentfulBlogPostBodyTextNode___children___children' |
  'blog_post___childContentfulBlogPostBodyTextNode___internal___content' |
  'blog_post___childContentfulBlogPostBodyTextNode___internal___contentDigest' |
  'blog_post___childContentfulBlogPostBodyTextNode___internal___description' |
  'blog_post___childContentfulBlogPostBodyTextNode___internal___fieldOwners' |
  'blog_post___childContentfulBlogPostBodyTextNode___internal___ignoreType' |
  'blog_post___childContentfulBlogPostBodyTextNode___internal___mediaType' |
  'blog_post___childContentfulBlogPostBodyTextNode___internal___owner' |
  'blog_post___childContentfulBlogPostBodyTextNode___internal___type' |
  'blog_post___childContentfulBlogPostBodyTextNode___body' |
  'blog_post___childContentfulBlogPostBodyTextNode___sys___type' |
  'shortBio___id' |
  'shortBio___parent___id' |
  'shortBio___parent___parent___id' |
  'shortBio___parent___parent___children' |
  'shortBio___parent___children' |
  'shortBio___parent___children___id' |
  'shortBio___parent___children___children' |
  'shortBio___parent___internal___content' |
  'shortBio___parent___internal___contentDigest' |
  'shortBio___parent___internal___description' |
  'shortBio___parent___internal___fieldOwners' |
  'shortBio___parent___internal___ignoreType' |
  'shortBio___parent___internal___mediaType' |
  'shortBio___parent___internal___owner' |
  'shortBio___parent___internal___type' |
  'shortBio___children' |
  'shortBio___children___id' |
  'shortBio___children___parent___id' |
  'shortBio___children___parent___children' |
  'shortBio___children___children' |
  'shortBio___children___children___id' |
  'shortBio___children___children___children' |
  'shortBio___children___internal___content' |
  'shortBio___children___internal___contentDigest' |
  'shortBio___children___internal___description' |
  'shortBio___children___internal___fieldOwners' |
  'shortBio___children___internal___ignoreType' |
  'shortBio___children___internal___mediaType' |
  'shortBio___children___internal___owner' |
  'shortBio___children___internal___type' |
  'shortBio___internal___content' |
  'shortBio___internal___contentDigest' |
  'shortBio___internal___description' |
  'shortBio___internal___fieldOwners' |
  'shortBio___internal___ignoreType' |
  'shortBio___internal___mediaType' |
  'shortBio___internal___owner' |
  'shortBio___internal___type' |
  'shortBio___shortBio' |
  'shortBio___sys___type' |
  'spaceId' |
  'createdAt' |
  'updatedAt' |
  'sys___type' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'childContentfulPersonShortBioTextNode___id' |
  'childContentfulPersonShortBioTextNode___parent___id' |
  'childContentfulPersonShortBioTextNode___parent___parent___id' |
  'childContentfulPersonShortBioTextNode___parent___parent___children' |
  'childContentfulPersonShortBioTextNode___parent___children' |
  'childContentfulPersonShortBioTextNode___parent___children___id' |
  'childContentfulPersonShortBioTextNode___parent___children___children' |
  'childContentfulPersonShortBioTextNode___parent___internal___content' |
  'childContentfulPersonShortBioTextNode___parent___internal___contentDigest' |
  'childContentfulPersonShortBioTextNode___parent___internal___description' |
  'childContentfulPersonShortBioTextNode___parent___internal___fieldOwners' |
  'childContentfulPersonShortBioTextNode___parent___internal___ignoreType' |
  'childContentfulPersonShortBioTextNode___parent___internal___mediaType' |
  'childContentfulPersonShortBioTextNode___parent___internal___owner' |
  'childContentfulPersonShortBioTextNode___parent___internal___type' |
  'childContentfulPersonShortBioTextNode___children' |
  'childContentfulPersonShortBioTextNode___children___id' |
  'childContentfulPersonShortBioTextNode___children___parent___id' |
  'childContentfulPersonShortBioTextNode___children___parent___children' |
  'childContentfulPersonShortBioTextNode___children___children' |
  'childContentfulPersonShortBioTextNode___children___children___id' |
  'childContentfulPersonShortBioTextNode___children___children___children' |
  'childContentfulPersonShortBioTextNode___children___internal___content' |
  'childContentfulPersonShortBioTextNode___children___internal___contentDigest' |
  'childContentfulPersonShortBioTextNode___children___internal___description' |
  'childContentfulPersonShortBioTextNode___children___internal___fieldOwners' |
  'childContentfulPersonShortBioTextNode___children___internal___ignoreType' |
  'childContentfulPersonShortBioTextNode___children___internal___mediaType' |
  'childContentfulPersonShortBioTextNode___children___internal___owner' |
  'childContentfulPersonShortBioTextNode___children___internal___type' |
  'childContentfulPersonShortBioTextNode___internal___content' |
  'childContentfulPersonShortBioTextNode___internal___contentDigest' |
  'childContentfulPersonShortBioTextNode___internal___description' |
  'childContentfulPersonShortBioTextNode___internal___fieldOwners' |
  'childContentfulPersonShortBioTextNode___internal___ignoreType' |
  'childContentfulPersonShortBioTextNode___internal___mediaType' |
  'childContentfulPersonShortBioTextNode___internal___owner' |
  'childContentfulPersonShortBioTextNode___internal___type' |
  'childContentfulPersonShortBioTextNode___shortBio' |
  'childContentfulPersonShortBioTextNode___sys___type';

export type ContentfulPersonFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  company?: Maybe<StringQueryOperatorInput>,
  email?: Maybe<StringQueryOperatorInput>,
  phone?: Maybe<StringQueryOperatorInput>,
  facebook?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<StringQueryOperatorInput>,
  github?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<ContentfulAssetFilterInput>,
  blog_post?: Maybe<ContentfulBlogPostFilterListInput>,
  shortBio?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulPersonSysFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>,
};

export type ContentfulPersonGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulPersonEdge>,
  nodes: Array<ContentfulPerson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulPersonShortBioTextNode = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  shortBio?: Maybe<Scalars['String']>,
  sys?: Maybe<ContentfulPersonShortBioTextNodeSys>,
};

export type ContentfulPersonShortBioTextNodeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulPersonShortBioTextNodeEdge>,
  nodes: Array<ContentfulPersonShortBioTextNode>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulPersonShortBioTextNodeGroupConnection>,
};


export type ContentfulPersonShortBioTextNodeConnectionDistinctArgs = {
  field: ContentfulPersonShortBioTextNodeFieldsEnum
};


export type ContentfulPersonShortBioTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulPersonShortBioTextNodeFieldsEnum
};

export type ContentfulPersonShortBioTextNodeEdge = {
  next?: Maybe<ContentfulPersonShortBioTextNode>,
  node: ContentfulPersonShortBioTextNode,
  previous?: Maybe<ContentfulPersonShortBioTextNode>,
};

export type ContentfulPersonShortBioTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'shortBio' |
  'sys___type';

export type ContentfulPersonShortBioTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  shortBio?: Maybe<StringQueryOperatorInput>,
  sys?: Maybe<ContentfulPersonShortBioTextNodeSysFilterInput>,
};

export type ContentfulPersonShortBioTextNodeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulPersonShortBioTextNodeEdge>,
  nodes: Array<ContentfulPersonShortBioTextNode>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulPersonShortBioTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPersonShortBioTextNodeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulPersonShortBioTextNodeSys = {
  type?: Maybe<Scalars['String']>,
};

export type ContentfulPersonShortBioTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulPersonSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPersonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulPersonSys = {
  type?: Maybe<Scalars['String']>,
  revision?: Maybe<Scalars['Int']>,
  contentType?: Maybe<ContentfulPersonSysContentType>,
};

export type ContentfulPersonSysContentType = {
  sys?: Maybe<ContentfulPersonSysContentTypeSys>,
};

export type ContentfulPersonSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPersonSysContentTypeSysFilterInput>,
};

export type ContentfulPersonSysContentTypeSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
};

export type ContentfulPersonSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulPersonSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  revision?: Maybe<IntQueryOperatorInput>,
  contentType?: Maybe<ContentfulPersonSysContentTypeFilterInput>,
};

export type ContentfulReference = {
  contentful_id: Scalars['String'],
  id: Scalars['ID'],
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  src?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ImageResizingBehavior = 
  'NO_CHANGE' |
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  'PAD' |
  /** Crop a part of the original image to match the specified size. */
  'CROP' |
  /** 
 * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
 **/
  'FILL' |
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  'THUMB' |
  /** Scale the image regardless of the original aspect ratio. */
  'SCALE';

export type Internal = {
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Query = {
  contentfulEntry?: Maybe<ContentfulEntry>,
  allContentfulEntry: ContentfulEntryConnection,
  contentfulAsset?: Maybe<ContentfulAsset>,
  allContentfulAsset: ContentfulAssetConnection,
  contentfulPerson?: Maybe<ContentfulPerson>,
  allContentfulPerson: ContentfulPersonConnection,
  contentfulBlogPost?: Maybe<ContentfulBlogPost>,
  allContentfulBlogPost: ContentfulBlogPostConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  contentfulContentType?: Maybe<ContentfulContentType>,
  allContentfulContentType: ContentfulContentTypeConnection,
  contentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNode>,
  allContentfulPersonShortBioTextNode: ContentfulPersonShortBioTextNodeConnection,
  contentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNode>,
  allContentfulBlogPostDescriptionTextNode: ContentfulBlogPostDescriptionTextNodeConnection,
  contentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNode>,
  allContentfulBlogPostBodyTextNode: ContentfulBlogPostBodyTextNodeConnection,
};


export type QueryContentfulEntryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  node_locale?: Maybe<StringQueryOperatorInput>
};


export type QueryAllContentfulEntryArgs = {
  filter?: Maybe<ContentfulEntryFilterInput>,
  sort?: Maybe<ContentfulEntrySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulAssetArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  file?: Maybe<ContentfulAssetFileFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  sys?: Maybe<ContentfulAssetSysFilterInput>,
  fixed?: Maybe<ContentfulFixedFilterInput>,
  resolutions?: Maybe<ContentfulResolutionsFilterInput>,
  fluid?: Maybe<ContentfulFluidFilterInput>,
  sizes?: Maybe<ContentfulSizesFilterInput>,
  resize?: Maybe<ContentfulResizeFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>,
  sort?: Maybe<ContentfulAssetSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulPersonArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  company?: Maybe<StringQueryOperatorInput>,
  email?: Maybe<StringQueryOperatorInput>,
  phone?: Maybe<StringQueryOperatorInput>,
  facebook?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<StringQueryOperatorInput>,
  github?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<ContentfulAssetFilterInput>,
  blog_post?: Maybe<ContentfulBlogPostFilterListInput>,
  shortBio?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulPersonSysFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>
};


export type QueryAllContentfulPersonArgs = {
  filter?: Maybe<ContentfulPersonFilterInput>,
  sort?: Maybe<ContentfulPersonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulBlogPostArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  publishDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  heroImage?: Maybe<ContentfulAssetFilterInput>,
  author?: Maybe<ContentfulPersonFilterInput>,
  description?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>,
  body?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulBlogPostSysFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>,
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>
};


export type QueryAllContentfulBlogPostArgs = {
  filter?: Maybe<ContentfulBlogPostFilterInput>,
  sort?: Maybe<ContentfulBlogPostSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  displayField?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  sys?: Maybe<ContentfulContentTypeSysFilterInput>
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>,
  sort?: Maybe<ContentfulContentTypeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulPersonShortBioTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  shortBio?: Maybe<StringQueryOperatorInput>,
  sys?: Maybe<ContentfulPersonShortBioTextNodeSysFilterInput>
};


export type QueryAllContentfulPersonShortBioTextNodeArgs = {
  filter?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>,
  sort?: Maybe<ContentfulPersonShortBioTextNodeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulBlogPostDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  sys?: Maybe<ContentfulBlogPostDescriptionTextNodeSysFilterInput>
};


export type QueryAllContentfulBlogPostDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>,
  sort?: Maybe<ContentfulBlogPostDescriptionTextNodeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulBlogPostBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  sys?: Maybe<ContentfulBlogPostBodyTextNodeSysFilterInput>
};


export type QueryAllContentfulBlogPostBodyTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>,
  sort?: Maybe<ContentfulBlogPostBodyTextNodeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type Site = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export type SiteFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'siteMetadata___title' |
  'siteMetadata___authors' |
  'siteMetadata___authors___name' |
  'siteMetadata___authors___slug' |
  'port' |
  'host' |
  'polyfill' |
  'pathPrefix' |
  'buildTime';

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  path?: Maybe<Scalars['String']>,
  internalComponentName?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  body?: Maybe<SitePageContextBody>,
  heroImage?: Maybe<SitePageContextHeroImage>,
};

export type SitePageContextBody = {
  body?: Maybe<Scalars['String']>,
};

export type SitePageContextBodyFilterInput = {
  body?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  body?: Maybe<SitePageContextBodyFilterInput>,
  heroImage?: Maybe<SitePageContextHeroImageFilterInput>,
};

export type SitePageContextHeroImage = {
  fluid?: Maybe<SitePageContextHeroImageFluid>,
};

export type SitePageContextHeroImageFilterInput = {
  fluid?: Maybe<SitePageContextHeroImageFluidFilterInput>,
};

export type SitePageContextHeroImageFluid = {
  base64?: Maybe<Scalars['String']>,
};

export type SitePageContextHeroImageFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export type SitePageFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'path' |
  'internalComponentName' |
  'component' |
  'componentChunkName' |
  'isCreatedByStatefulCreatePages' |
  'context___id' |
  'context___slug' |
  'context___title' |
  'context___body___body' |
  'context___heroImage___fluid___base64' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___fileName' |
  'pluginCreator___pluginOptions___spaceId' |
  'pluginCreator___pluginOptions___accessToken' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___author' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath';

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export type SitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___fileName' |
  'pluginOptions___spaceId' |
  'pluginOptions___accessToken' |
  'pluginOptions___path' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___author' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
  fileName?: Maybe<Scalars['String']>,
  spaceId?: Maybe<Scalars['String']>,
  accessToken?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  fileName?: Maybe<StringQueryOperatorInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  accessToken?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>,
  authors?: Maybe<Array<Maybe<SiteSiteMetadataAuthors>>>,
};

export type SiteSiteMetadataAuthors = {
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataAuthorsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
};

export type SiteSiteMetadataAuthorsFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataAuthorsFilterInput>,
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  authors?: Maybe<SiteSiteMetadataAuthorsFilterListInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SortOrderEnum = 
  'ASC' |
  'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type AuthorsQueryVariables = {};


export type AuthorsQuery = { site: Maybe<{ siteMetadata: Maybe<{ authors: Maybe<Array<Maybe<Pick<SiteSiteMetadataAuthors, 'name' | 'slug'>>>> }> }> };

export type BlogsQueryVariables = {};


export type BlogsQuery = { allContentfulBlogPost: { edges: Array<{ node: (
        Pick<ContentfulBlogPost, 'id' | 'slug' | 'title' | 'tags'>
        & { body: Maybe<Pick<ContentfulBlogPostBodyTextNode, 'body'>>, heroImage: Maybe<{ fluid: Maybe<> }> }
      ) }> } };
