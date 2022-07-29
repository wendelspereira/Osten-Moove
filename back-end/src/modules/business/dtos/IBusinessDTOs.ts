interface ICreateBusinessDTO {
  corporateName: string;
  tradeName: string;
  cnpj: string;
  publicPlace: string;
  streetNumber: string;
  complement?: string;
  district: string;
  city: string;
  federatedUnit: string;
  prefixPhoneNumber: number;
  phoneNumber: number;
}

interface IUpdateBusinessDTO {
  corporateName?: string;
  tradeName?: string;
  cnpj?: string;
  publicPlace?: string;
  streetNumber?: string;
  complement?: string;
  district?: string;
  city?: string;
  federatedUnit?: string;
  prefixPhoneNumber?: number;
  phoneNumber?: number;
}

export { ICreateBusinessDTO, IUpdateBusinessDTO };
