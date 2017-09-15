export interface IUser {
    id: string,
    gmail_id: string,
    first_name: string,
    last_name: string,
    gender: string,
    email: string,
    password: string,
    phone_no: number,
    birth_date: string,
    username: string,
    images: {
        id: string,
        userId: string,
        name: string,
        type: string,
        isActive: boolean,
        container: string,
        ImgURL: string,
        ThumbURL: string
    }
}