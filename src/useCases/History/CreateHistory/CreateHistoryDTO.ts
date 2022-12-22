type CategoryId = number;
type ImageUrl = string;

export interface CreateHistoryDTO {
  title: string;
  description: string;
  language: string;
  associatedCategories: CategoryId[];
  mainImage: ImageUrl;
  galleryOfImages: ImageUrl[];
}
