"use client"

import AnimatedText from "@/components/animation/page"
import { PhotoModal } from "@/components/photoModal/photoModal";
import { useState } from "react";

const EquipmentRegister = () => {

  const [modal, setModal] = useState(false)

  return (
    <>
      <div className="p-16">
        <div className="flex felx-col items-center justify-center">
          <span
            className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm"
          >
            Como funciona?
          </span>
        </div>
        <AnimatedText
          once
          text="Gestão de Equipamentos"
          el="h1"
          className="text-3xl text-center mt-6 font-bold text-gray-700"
        />
        <p className="text-center mt-6 text-lg font-light text-gray-600">
          Introdução ao processo de cadastro de equipamentos na plataforma.
        </p>
      </div>

      <section className="bg-white">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <AnimatedText
                once
                text="Cadastro Inicial"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-gray-700 text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-600 text-center sm:text-left">
                É no cadastro inicial da FROTA, que alinhamos os padrões para uma boa gestão dos ativos.
              </p>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img onClick={() => setModal(true)} src="/static/images/fleet/modal.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>
      
    {modal && (
      <PhotoModal open={modal} setOpen={(value) => setModal(value)} url="/static/images/fleet/modal.png"/>
    )}

    </>
  );
}

export default EquipmentRegister