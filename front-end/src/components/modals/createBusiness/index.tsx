import React from "react";
import { Form } from "@unform/web";
import Input from "../../input";
import styles from "./styles.module.scss";
import { api } from "../../../config/axios";
import { Business } from "../../../entities/Business";

interface ICreateBusinessProps {
  closeModal: () => void;
}

export function CreateBusiness(props: ICreateBusinessProps) {
  async function handleSubmit(data: Business) {
    try {
      await api.post("/", { ...data });
      props.closeModal();
    } catch (err: any) {
      if (err.response.status !== 201) {
        switch (err.response.status) {
          case 450:
            alert("CNPJ inválido! Por favor, tente novamente.");
            return;
          case 409:
            alert("Já existe um risgistro para o CNPJ informado.");
            return;
        }

        alert(
          "Algo deu errado, por favor tente novamente ou contate o suporte"
        );
        props.closeModal();
        return;
      }
    }
  }

  return (
    <div
      className={styles.container + " flex flex-col  w-[36rem] px-12 pt-8 pb-6"}
    >
      <div className="w-full border-b-[2px] border-gray-100 ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-600 ">
            Nova Empresa
          </h1>
        </div>
      </div>
      <Form
        onSubmit={handleSubmit}
        className="flex flex-col w-full h-full gap-2"
      >
        <label className="text-lg font-bold text-gray-600 mt-5 ">Dados</label>

        <Input
          name="corporateName"
          placeholder="Razão social"
          required
          autoFocus={true}
        />
        <Input name="tradeName" placeholder="Nome fantasia" required />
        <Input
          name="cnpj"
          placeholder="CNPJ"
          required
          title="Este campo deve ter o seguinte formato: 00.000.000/0001-00"
          pattern="[0-9]{2}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}"
        />

        <div className="flex items center gap-4 ">
          <Input
            type={"tel"}
            pattern="[0-9]{2}"
            name="prefixPhoneNumber"
            placeholder="DDD"
            required
            className="w-[15%]"
            title="Este campo deve conter 2 digitos numéricos"
            maxLength={2}
          />
          <Input
            type={"tel"}
            pattern="[0-9]{8}"
            required
            title="Este campo deve ter o seguinte formato: 33333333"
            name="phoneNumber"
            placeholder="Telefone"
            maxLength={8}
            className="w-[85%]"
          />
        </div>
        <Input name="publicPlace" placeholder="Logradouro" required />
        <Input name="complement" placeholder="Complemento" />
        <Input name="streetNumber" placeholder="nº" required />
        <Input name="district" placeholder="Bairro" required />
        <div className="flex items center gap-4">
          <Input
            name="city"
            placeholder="Cidade"
            required
            className="w-[80%]"
          />
          <Input
            name="federatedUnit"
            placeholder="UF"
            required
            className="w-[20%]"
            maxLength={2}
            title="Este campo deve ter o seguinte formato: DF"
          />
        </div>
        <div className="flex justify-end gap-4 mt-2">
          <button
            onClick={() => props.closeModal()}
            className="bg-gray-500 w-[6rem] text-white py-2 px-4 rounded-md hover:opacity-80 shadow-md"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-blue-900 w-[6rem] text-white py-2 px-4 rounded-md hover:opacity-80 shadow-md"
          >
            Savar
          </button>
        </div>
      </Form>
    </div>
  );
}
