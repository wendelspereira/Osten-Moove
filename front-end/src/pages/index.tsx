import type { NextPage } from "next";
import { useFetch } from "../services/useFetch";
import { Business } from "../entities/Business";
import { Eye, MagnifyingGlass, NotePencil, Trash } from "phosphor-react";
import { useRouter } from "next/router";
import { FC, ReactComponentElement, useEffect, useState } from "react";
import { customStyles } from "../components/modals/modalStyles";
import { MoreDetail } from "../components/modals/moreDatails";
import { CreateBusiness } from "../components/modals/createBusiness";
import { UpdateBusiness } from "../components/modals/updateBusiness";
import { DeleteBusiness } from "../components/modals/deleteBusiness";
import Modal from "react-modal";
import { api } from "../config/axios";
import Input from "../components/input";
import { formatId } from "../utils/formatId";

interface IPageHomeProps {
  data: Business[];
}

interface IModalProps {
  isOpen: boolean;
  child: ReactComponentElement<FC> | undefined;
}

export async function getServerSideProps() {
  const response = await api.get("/list");
  const data = await response.data;

  return { props: { data } };
}

const Home: NextPage<IPageHomeProps> = (props: IPageHomeProps) => {
  const router = useRouter();
  const refetch = () => {
    router.replace(router.asPath);
  };

  const [modal, setModalProps] = useState<IModalProps>({
    isOpen: false,
    child: undefined,
  });

  function closeModal() {
    setModalProps({
      isOpen: false,
      child: undefined,
    });
    refetch();
  }

  const handleCreateBusiness = () => {
    setModalProps({
      isOpen: true,
      child: <CreateBusiness closeModal={closeModal} />,
    });
  };

  const handleMoreDatails = (id: number) => {
    setModalProps({
      isOpen: true,
      child: <MoreDetail closeModal={closeModal} id={id} />,
    });
  };

  const handleUpdate = (id: number) => {
    setModalProps({
      isOpen: true,
      child: <UpdateBusiness closeModal={closeModal} id={id} />,
    });
  };

  const handleDelete = (id: number) => {
    setModalProps({
      isOpen: true,
      child: <DeleteBusiness closeModal={closeModal} id={id} />,
    });
  };

  //Search #########################################################################
  const [query, setQuery] = useState<String>("");
  const [searchedData, setSearchedData] = useState<Business[] | [] | null>(
    null
  );

  useEffect(() => {
    if (query !== "") {
      api(`/search/?tradeName=${query}`).then((response) => {
        setSearchedData(response.data);
      });
    } else {
      setSearchedData(null);
    }
  }, [query]);

  const handleSearch = async (e: any) => {
    const query = e.currentTarget.value;
    if (e.key === "Enter") {
      setQuery(query);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100">
      <Modal
        isOpen={modal.isOpen}
        onRequestClose={() => closeModal}
        style={customStyles}
        contentLabel="modal"
        ariaHideApp={false}
      >
        {modal.child}
      </Modal>
      <header className="flex h-14 bg-white items-center">
        <div className="flex h-full gap-2 pl-5 items-center text-gray-900 text-xl">
          <img src="logo.png" alt="Logo" className="h-8" />
          <span>Osten Moove</span>
        </div>
      </header>

      <main className="flex flex-col justify-center items-center p-[5rem] gap-7">
        <div className="flex w-full justify-between items-center h-[5rem]">
          <div className=" flex flex-col h-full gap-3">
            <span className="text-gray-600 text-2xl">Business</span>
            <div className="flex items-center px-3 bg-white h-10 w-[20rem] rounded-full gap-3 shadow-md">
              <MagnifyingGlass size={20} color="#607b96" weight="light" />
              <input
                name="searchByTradeName"
                type="text"
                placeholder="Search by trade name"
                className="w-[16rem] border-none bg-white text-gray-300 h-full"
                onKeyDown={handleSearch}
              />
            </div>
          </div>
          <div>
            <button
              onClick={handleCreateBusiness}
              className="bg-blue-900 font-bold text-white py-2 px-4 rounded-md hover:opacity-80 shadow-md"
            >
              Create Business
            </button>
          </div>
        </div>
        <table className="bg-white w-full h-fit shadow-md rounded-md">
          <thead className="w-full h-12 border-b-[1px] flex items-center px-[10%] text-lg font-bold text-gray-300">
            <tr className="flex w-full h-full">
              <th className="w-[30%] lg:w-[20%]  h-full flex items-center">
                ID
              </th>
              <th className="w-[40%] h-full flex items-center">Razão Social</th>
              <th className="w-[30%] h-full flex items-center">CNPJ</th>
            </tr>
          </thead>

          <tbody className="w-full h-full ">
            {(searchedData || props.data).map((business) => {
              const { id, tradeName, cnpj } = business;
              return (
                <tr
                  key={id}
                  className="w-full h-10 border-b-[1px] flex items-center justify-start px-[10%] hover:bg-gray-100 transition-colors
                    "
                >
                  <td className="w-full h-10 flex items-center justify-start text-gray-600 ">
                    <div className="w-[30%] lg:w-[20%] font-medium text-blue-900">
                      {formatId(id)}
                    </div>
                    <div className="w-[40%]  truncate">{tradeName}</div>
                    <div className="w-[30%] pr-5 ">{cnpj}</div>
                  </td>
                  <td className=" hidden  absolute right-28  md:flex gap-8 ">
                    <Eye
                      size={20}
                      color="#64748B"
                      weight="bold"
                      onClick={() => handleMoreDatails(id!)}
                      className="hover:opacity-80 hover:cursor-pointer transition-colors"
                    />
                    <NotePencil
                      size={20}
                      color="#64748B"
                      weight="bold"
                      onClick={() => handleUpdate(id!)}
                      className="hover:opacity-80 hover:cursor-pointer transition-colors"
                    />
                    <Trash
                      size={20}
                      color="#64748B"
                      weight="bold"
                      onClick={() => handleDelete(id!)}
                      className="hover:opacity-80 hover:cursor-pointer transition-colors"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Home;
