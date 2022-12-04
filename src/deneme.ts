
/*
async func main(){
    ..
    ..
    ..
      // We can update with bottom block When we want to change our nft. We will activate this block whenever we want update nft

  /*
    // await createNft(metaplex, uri)

  // You can get this from the Solana Explorer URL 
  const mintAddress = new PublicKey("EPd324PkQx53Cx2g2B9ZfxVmu6m6gyneMaoWTy2hk2bW")
  await updateNft(metaplex, uri, mintAddress)

    
}
*/

/*
// UPDATE NFT
async function updateNft(
    metaplex: Metaplex,
    uri: string,
    mintAddress: PublicKey
  ) {
    // get "NftWithToken" type from mint address
    const nft = await metaplex.nfts().findByMint({ mintAddress })
  
    // omit any fields to keep unchanged
    await metaplex
      .nfts()
      .update({
        nftOrSft: nft,
        name: tokenName,
        symbol: symbol,
        uri: uri,
        sellerFeeBasisPoints: sellerFeeBasisPoints,
      })
  
    console.log(
      `Token Mint: https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`
    )
  }
  

  */