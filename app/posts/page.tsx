import productData from "../public/data/Asset 3d jason.json"; 
import CardList from "../album/components/posts/Cardlist"; 
import ViewUserButton from "../album/components/posts/ViewUserBotton"; 

interface IProduct {
  id: number;
  nama_produk: string;
  harga: number;
  artis_3d?: string;
  lokasi?: string;
}

const ProductList = () => {
  const products: IProduct[] = productData["Asset3D"]; // Menggunakan notasi bracket

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">Daftar Aset 3D</h1>
      {products.map((product) => (
        <CardList key={product.id}>
          <p>Nama Produk: {product.nama_produk}</p>
          <i>Artis 3D: {product.artis_3d || product.lokasi}</i>
          <p>Harga: Rp{product.harga.toLocaleString()}</p>
          <p>Artis/Lokasi: {product.artis_3d || product.lokasi}</p>
          <ViewUserButton userId={product.id} />
        </CardList>
      ))}
    </>
  );
};

export default ProductList;
