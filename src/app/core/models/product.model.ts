export interface IProduct {
  product_name: string,
  categoryId: string,
  product_producer: string,
  product_description: string,
  product_cost: number,
  product_avg_rating: number,
  product_stock: number,
  product_color: string,
  product_dimension: string,
  product_isactive: true,
  product_material: string,
  id: string,
  product_img: IProductImg[],
}

export interface IProductImg {
  ImgUrl: string,
  ThumbUrl100: string,
  ThumbUrl250: string
}

