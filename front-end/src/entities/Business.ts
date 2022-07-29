class Business {
    id?: number;
    corporateName!: string;
    tradeName!: string;
    cnpj!: string;
    publicPlace!: string;
    streetNumber!: string;
    complement?: string;
    district!: string;
    city!: string;
    federatedUnit!: string;
    created_at!: Date;
    prefixPhoneNumber!: number;
    phoneNumber!: number;
}

export { Business };
