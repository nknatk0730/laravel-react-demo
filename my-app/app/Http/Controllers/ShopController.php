<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\Shop;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShopController extends Controller
{
    public function index()
    {
        // $shops = Shop::all();

        $shops = Shop::with('reviews')->get();

        $newReviews = Review::with('shop', 'user')->orderBy('created_at', 'desc')->take(5)->get();

        return Inertia::render('Home', [
            'shops' => $shops,
            'newReviews' => $newReviews,
        ]);
    }

    public function detail($id)
    {
        $shop = Shop::with('reviews.user')->find($id);

        return Inertia::render('Shop/Detail', [
            'shop' => $shop,
        ]);
    }
}
