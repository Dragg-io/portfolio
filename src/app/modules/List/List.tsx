interface ListProps {
  ItemComponnet: any;
  data: any;
  title: string;
};

const List = ({ ItemComponnet, data, title }: ListProps) => {
  return <div className="mt-[60px] tablet:mt-20">
    <header className="w-full flex max-w-[80%] relative pb-4 mb-9">
      <h3 className="pl-8 flex gap-5 text-w1 text-xl monoFonting"><span>//</span>{title}</h3>
      <div className="absolute bottom-0 w-full h-[2px] flex">
        <span className="w-[77%] h-[100%] bg-w2 block"></span>
        <span className="w-[23%] h-[100%] bg-b2 block"></span>
      </div>
    </header>
    <main>
      {data && data.map((item: any) => <ItemComponnet data={item} />)}
    </main>
  </div>;
}

export default List;