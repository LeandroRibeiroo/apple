interface ButtonProps {
  title: string
  onClick?: () => void
  width?: string
  loading?: boolean
  padding?: string
  noIcon?: boolean
}

interface CategoryProps {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: 'category'
  slug: {
    _type: 'slug'
    current: string
  }
  title: string
}

interface ImageProps {
  _key: string
  _type: 'image'
  asset: {
    url: string
  }
}

interface ProductProps {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: 'product'
  title: string
  price: number
  slug: {
    _type: 'slug'
    current: string
  }
  description: string
  category: {
    _type: 'reference'
    _ref: string
  }
  image: ImageProps[]
}

interface StripeProduct {
  id: string
  amount_discount: number
  amount_subtotal: number
  amount_tax: number
  amount_total: number
  currency: string
  description: string
  object: string
  quantity: number
  price: {
    unit_amount: number
  }
}
