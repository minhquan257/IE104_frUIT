import { useState, useEffect, useContext } from 'react';

import { Context } from '../context/Context';
import images from '../assets';
import CreatorCard from '../components/CreatorCard.jsx';
import NFTCard from '../components/NFTCard';
import Loading from '../components/Loading';
import SearchBar from '../components/Searchbar';
import CarouselComp from '../components/CarouselComp';
import ToastComp from '../components/Toast';

const Home = () => {
  const { fetchExistingMarketItem, loading, logIn, setLoading } =
    useContext(Context);
  const [nftItems, setNftItems] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetchExistingMarketItem().then((items) => {
      setNftItems(items);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'visible';
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredNFT = nftItems.filter((nft) => {
    return nft.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="relative flex flex-col justify-center w-full p-10 xs:p-6 minmd:px-60 pc:px-28">
      {!logIn ? (
        <div className="fixed bottom-0 z-50 right-10">
          <ToastComp />{' '}
        </div>
      ) : null}

      {/* =================Banner================= */}
      <div className="relative flex justify-center w-full">
        <h1 className="absolute z-20 w-4/5 py-3 text-6xl font-semibold text-center text-white font-poppins md:text-3xl sm:text-xl xs:text-lg -bottom-48 xl:-bottom-72 minmd:-bottom-96">
          Discover, create and buy extraordinary NFTs from UIT
        </h1>
      </div>
      <CarouselComp />

      {/* =================Creators================= */}
      <p className="mb-6 text-3xl font-bold dark:text-white text-prim-black-3">
        Top Creators
      </p>
      <div className="flex justify-between md:justify-evenly">
        <div>
          <CreatorCard
            imageCard={images.creator1}
            number="1"
            name="Phat Luu"
            address="0x7p5r...8txn"
          />
        </div>
        <div className="hidden mobile:flex">
          <CreatorCard
            imageCard={images.creator2}
            number="2"
            name="Quan Ngu"
            address="0xefv1...tjy5"
          />
        </div>
        <div className="hidden note:flex">
          <CreatorCard
            imageCard={images.creator3}
            number="3"
            name="Tuan Mai"
            address="0xtdt3...nh0n"
          />
        </div>
        <div className="hidden tablet:flex">
          <CreatorCard
            imageCard={images.creator4}
            number="4"
            name="Huy Ngo"
            address="0xh2fg...asd7"
          />
        </div>
        <div className="hidden laptop:flex">
          <CreatorCard
            imageCard={images.creator5}
            number="5"
            name="Khiem Chau"
            address="0xqk8...bw9e"
          />
        </div>
      </div>

      {/* =======================NFTs======================= */}
      <div className="flex flex-row justify-between my-4 sm:flex-col">
        <p className="my-6 text-3xl font-bold dark:text-white text-prim-black-3">
          Top NFTs
        </p>
        <div className="sm:mb-5 sm:flex sm:justify-center">
          <SearchBar
            placeholder="Search NFT here"
            searchChange={onSearchChange}
          />
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : // Check if there's any NFT on market
      nftItems.length ? (
        //    Xài grid tiện hơn flex
        <div className="grid w-full grid-cols-1 gap-8 mt-3 mobile:grid-cols-2 note:grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-5 ">
          {filteredNFT.map((nft) => (
            <NFTCard key={nft.tokenId} nft={nft} />
          ))}
        </div>
      ) : (
        <h1 className="mt-5 text-3xl font-normal text-prim-gray-2 font-poppins minmd:text-4xl xs:ml-0">
          There is no NFT on market
        </h1>
      )}
    </div>
  );
};

export default Home;
