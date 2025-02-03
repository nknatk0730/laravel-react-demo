export default function Home({ shops, newReviews}) {
    return (
      <div className="p-4 space-y-4">
        {/* Header */}
        <header className="flex">
          <a href="/home" className="text-2xl font-bold">{import.meta.env.VITE_APP_NAME}</a>
          <span className="flex-1"></span>
          <div className="flex space-x-4 text-sm items-center">
            <a href="#">Mypage</a>
            <a href="#">Register Shop</a>
          </div>
        </header>

        <div className="space-y-4">
          <h1 className="font-bold text-xl">Shop List</h1>
          <ul className="space-y-2">
            {shops.map((shop) => (
              <li className="p-2 border rounded" key={shop.id}>{shop.name}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-bold">Review List</h1>
          <ul className="space-y-2">
            {newReviews.map((review) => (
              <li className="p-2 border rounded" key={review.id}>
                <h3>{review.user.name}</h3>
                <p className="text-sm text-neutral-500">{review.comment}</p>
                <p className="text-sm text-neutral-500">{review.rating}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* footer */}
        <footer className="text-center mt-4 border-t pt-4 border-neutral-300">
          <p className="text-sm text-neutral-500">&copy; 2025 {import.meta.env.VITE_APP_NAME}</p>
        </footer>
      </div>
    );
}