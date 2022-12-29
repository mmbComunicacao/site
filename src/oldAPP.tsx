import { useState } from "react";
import { Tweet } from "./components/Tweet"
import './App.css';
import { AppRoutes } from "./Routes";

// Roteamento é permitir que a nossa aplicação tenha várias páginas como Sobre, Loja, Contato... Para isso vamos usar React Router. 

function App() {
  // const [tweets, setTweets] = useState<string[]>([
  //   'Tweet 1',
  //   'Tweet 2',
  //   'Tweet 3',
  //   'Tweet 4',
  // ])
  // //array vazio é o valor inicial da variável tweets

  // //O Estado (useState()) basicamente cria uma variável monitorada pelo componente, ou seja, sempre que a variável muda o valor o componente é "renderizado/remontado" novamente em tela;
  // //O <string[]> informa ao TypeScript, através de generics (<>), o tipo de conteúdo que será salvo. Neste caso uma lista de texto ou um array de texto.

  // // O useState retorna não só a lista de tweets, ele retona duas informações; Ele retorna um array com duas informações: 1(tweets)- A lista tweets e 2(setTweets)- uma função para atualizar a listagem de tweets.

  // function createTweet() {
  //   setTweets([...tweets, 'Tweet 5'])
  //   // setTweets substitui tuddo que há dentro de tweets pelo que é informado. Neste caso para manter os dados antigos e adicionar um novo devemos usar "...tweets,"

  // }

  return (
    <AppRoutes />
    // <div>
    //   {/* <Tweet text="Tweet 3" /> */}
    //   {/* Este text="Tweet .." é uma propriedade criada dentro do arquivo Tweet.tsx */}

    //   {tweets.map(tweet => {
    //     return <Tweet text={tweet} />
    //   })}
    //   {/* Para usar um código JavaScript aqui dentro devemos usar Chaves */}
    //   {/* tweets.map é um laço de repetição que percorre o array tweets buscando o tweet e logo retorna um <Tweet text=""/> para cada um que encontrar.*/}
    //   {/* Para usar variável ela deve ser colocada dentro de chaves */}
    //   <button
    //     onClick={createTweet}
    //     style={{
    //       backgroundColor: '#8257e6',
    //       color: '#FFF',
    //       border: 0,
    //       padding: '10px 10px',
    //       borderRadius: '5px'
    //     }}
    //     // (CSS in JS) Podemos inserir o CSS direto na tag em formato de JavaScript
    //   >
    //     Adicionar Tweet
    //   </button>
    // </div>
    //Quando temos vários componentes é necessário ter uma DIV encapsulando todo eles.
  );
}

export default App
