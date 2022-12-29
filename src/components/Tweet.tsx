type TweetProps = {
  text: string;
  // text?: string;
  //O ponto de interrogação informa que essa propriedade não é obrigatória;
}
// Informo para o react que essa função quando chamada poderá enviar uma propriedade do tipo texto.

export function Tweet(props: TweetProps) {
  return (
    <p>{props.text}</p>
    //Sempre que necessário a inclusão de um código JavaScript dentro do HTML é necessário colocar entre chaves.
  );
}