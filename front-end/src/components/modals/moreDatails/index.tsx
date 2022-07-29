import React from "react";
import { X } from "phosphor-react";
import styles from "./styles.module.scss";
import { useFetch } from "../../../services/useFetch";
import { Business } from "../../../entities/Business";
import { formatId } from "../../../utils/formatId";

interface ShowbusinessProps {
  id: number;
  closeModal: () => void;
}

export function MoreDetail(props: ShowbusinessProps) {
  const { data, isFetching } = useFetch<Business>(`/?id=${props.id}`);

  if (isFetching) {
    return <>Carregando...</>;
  }

  return (
    <div className="w-[44rem] ">
      <div className="w-full border-b-[2px] border-gray-100 py-8 px-8 ">
        <div className="flex justify-between items-center right-3 top-3  ">
          <h1 className="text-2xl font-bold text-gray-600 ">
            Dados da empresa
          </h1>
          <X
            size={20}
            color="#F75A68"
            weight="bold"
            className="hover:cursor-pointer hover:scale-125 transition-scale"
            onClick={() => props.closeModal()}
          />
        </div>
      </div>
      <div className="px-14 py-8">
        <dl className={styles.list}>
          <dt>ID</dt>
          <dd>{formatId(data?.id)}</dd>
          <dt>RAZÃO SOCIAL</dt>
          <dd>{data?.corporateName}</dd>
          <dt>NOME FANTASIA</dt>
          <dd>{data?.tradeName}</dd>
          <dt>CNPJ</dt>
          <dd>{data?.cnpj}</dd>
          <dt>TELEFONE</dt>
          <dd>
            ({data?.prefixPhoneNumber}) {" "}
            {data?.phoneNumber}
          </dd>
          <dt>ENDEREÇO</dt>
          <dd>
            {data?.publicPlace}; <span>{data?.streetNumber}</span>
          </dd>
          <dd>{data?.district}</dd>
          <dd>
            {data?.city}
            {" - "}
            <span>{data?.federatedUnit}</span>
          </dd>
        </dl>
      </div>
    </div>
  );
}
