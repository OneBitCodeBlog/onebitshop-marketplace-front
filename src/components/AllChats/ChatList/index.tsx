import React from "react";
import { NoChat } from "./styled";
import { FlatList, ListRenderItem } from "react-native";

const Chats = [
  {
    _id: "1",
    buyer: "Lucas Queiroga",
    messages: [
      {
        _id: "10",
        content: "Fico no aguardo! Tenha um bom dia.",
        createdAt: "26-04-2023",
        reciver: "buyer",
        sender: "seller",
      },
      {
        _id: "9",
        content:
          "Muito obrigado pela sua atenção. Entrarei em contato em breve. Até mais!",
        createdAt: "25-04-2023",
        reciver: "seller",
        sender: "buyer",
      },
      {
        _id: "8",
        content:
          "Claro, sem problemas! Se tiver mais alguma dúvida, por favor, não hesite em me contatar. Obrigado pelo seu interesse no PlayStation 5!",
        createdAt: "24-04-2023",
        reciver: "buyer",
        sender: "seller",
      },
      {
        _id: "7",
        content:
          "Compreendo. Eu ainda estou interessado, mas preciso pensar um pouco mais. Posso entrar em contato com você novamente em alguns dias?",
        createdAt: "23-04-2023",
        reciver: "seller",
        sender: "buyer",
      },
      {
        _id: "6",
        content:
          "Desculpe, mas esse é o preço final. O PlayStation 5 é um produto de alta qualidade e oferece uma experiência de jogo incrível que vale cada centavo do investimento.",
        createdAt: "22-04-2023",
        reciver: "buyer",
        sender: "seller",
      },
      {
        _id: "5",
        content:
          "Isso é um pouco fora do meu orçamento. Há algum desconto disponível?",
        createdAt: "21-04-2023",
        reciver: "seller",
        sender: "buyer",
      },
      {
        _id: "4",
        content: "O preço é de R$ 4.999,00.",
        createdAt: "20-04-2023",
        reciver: "buyer",
        sender: "seller",
      },
      {
        _id: "3",
        content: "Impressionante! Qual é o preço?",
        createdAt: "19-04-2023",
        reciver: "seller",
        sender: "buyer",
      },
      {
        _id: "2",
        content:
          "Olá, claro! O PlayStation 5 é o console de última geração da Sony. Ele possui processador AMD Zen 2 personalizado e GPU RDNA 2 personalizada, além de 16 GB de RAM GDDR6. O console também vem com uma unidade de armazenamento interno SSD ultra-rápida de 825 GB, que permite tempos de carregamento quase instantâneos. Ele também é compatível com jogos de PlayStation 4 e oferece suporte para jogos em 4K a 120fps, Ray Tracing, HDR e muito mais. O que mais você gostaria de saber?",
        createdAt: "19-04-2023",
        reciver: "buyer",
        sender: "seller",
      },
      {
        _id: "1",
        content:
          "Olá, gostaria de saber mais informações sobre o PlayStation 5.",
        createdAt: "18-04-2023",
        reciver: "seller",
        sender: "buyer",
      },
    ],
    seller: "Isaac Pontes",
    product: {
      _id: "1",
      seller: "Isaac Pontes",
      price: "2600",
      name: "PlayStation 5 nunca usado, apenas 1 controle com 2 jogos junto",
      description: "",
      images: [
        {
          filename: "playstationImage/jpeg",
          url: "https://m.media-amazon.com/images/I/61hJ40qZKKL._AC_SX679_.jpg",
        },
      ],
      publishedData: "05-03-2023",
    },
  },
  {
    _id: "2",
    buyer: "Juliana Conde",
    messages: [
      {
        _id: "10",
        content: "Fico no aguardo! Tenha um bom dia.",
        createdAt: "26-04-2023",
        reciver: "buyer",
        sender: "seller",
      },
      {
        _id: "9",
        content:
          "Muito obrigado pela sua atenção. Entrarei em contato em breve. Até mais!",
        createdAt: "25-04-2023",
        reciver: "seller",
        sender: "buyer",
      },
      {
        _id: "8",
        content:
          "Claro, sem problemas! Se tiver mais alguma dúvida, por favor, não hesite em me contatar. Obrigado pelo seu interesse no PlayStation 5!",
        createdAt: "24-04-2023",
        reciver: "buyer",
        sender: "seller",
      },
      {
        _id: "7",
        content:
          "Compreendo. Eu ainda estou interessado, mas preciso pensar um pouco mais. Posso entrar em contato com você novamente em alguns dias?",
        createdAt: "23-04-2023",
        reciver: "seller",
        sender: "buyer",
      },
      {
        _id: "6",
        content:
          "Desculpe, mas esse é o preço final. O PlayStation 5 é um produto de alta qualidade e oferece uma experiência de jogo incrível que vale cada centavo do investimento.",
        createdAt: "22-04-2023",
        reciver: "buyer",
        sender: "seller",
      },
      {
        _id: "5",
        content:
          "Isso é um pouco fora do meu orçamento. Há algum desconto disponível?",
        createdAt: "21-04-2023",
        reciver: "seller",
        sender: "buyer",
      },
      {
        _id: "4",
        content: "O preço é de R$ 4.999,00.",
        createdAt: "20-04-2023",
        reciver: "buyer",
        sender: "seller",
      },
      {
        _id: "3",
        content: "Impressionante! Qual é o preço?",
        createdAt: "19-04-2023",
        reciver: "seller",
        sender: "buyer",
      },
      {
        _id: "2",
        content:
          "Olá, claro! O PlayStation 5 é o console de última geração da Sony. Ele possui processador AMD Zen 2 personalizado e GPU RDNA 2 personalizada, além de 16 GB de RAM GDDR6. O console também vem com uma unidade de armazenamento interno SSD ultra-rápida de 825 GB, que permite tempos de carregamento quase instantâneos. Ele também é compatível com jogos de PlayStation 4 e oferece suporte para jogos em 4K a 120fps, Ray Tracing, HDR e muito mais. O que mais você gostaria de saber?",
        createdAt: "19-04-2023",
        reciver: "buyer",
        sender: "seller",
      },
      {
        _id: "1",
        content:
          "Olá, gostaria de saber mais informações sobre o PlayStation 5.",
        createdAt: "18-04-2023",
        reciver: "seller",
        sender: "buyer",
      },
    ],
    seller: "Leonardo Scorza",
    product: {
      _id: "1",
      seller: "Leonardo Scorza",
      price: "2600",
      name: "PlayStation 5 nunca usado, apenas 1 controle com 2 jogos junto",
      description: "",
      images: [
        {
          filename: "playstationImage/jpeg",
          url: "https://http2.mlstatic.com/D_NQ_NP_843348-MLA52221043351_102022-O.jpg",
        },
      ],
      publishedData: "05-03-2023",
    },
  },
];

const ChatList = () => {
  const renderItem: ListRenderItem<any> = () => {
    return <></>;
  };

  return (
    <>
      {Chats.length <= 0 ? (
        <NoChat>Você não tem chats no momento!</NoChat>
      ) : (
        <FlatList
          data={Chats}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      )}
    </>
  );
};

export default ChatList;
