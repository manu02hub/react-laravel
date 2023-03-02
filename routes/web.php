<?php

use App\Http\Controllers\CarritoController;
use App\Http\Controllers\CarsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Car;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {

    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/shop', function () {
    $cars = Car::all();
    return Inertia::render('Shop', ['cars' => $cars]);
})->middleware(['auth', 'verified'])->name('shop');

Route::get('/shop/{id}', [CarritoController::class, 'add'])->name('add');


Route::prefix('/carrito')->group(function () {
    Route::get('index', [CarritoController::class, 'index'])->middleware(['auth', 'verified'])->name('carrito');
    Route::get('destroy', [CarritoController::class, 'destroy'])->name('carrito-destroy');
});

Route::prefix('/coches')->group(function () {
    Route::get('index', [CarsController::class, 'index'])->name('coche-index');
    Route::post('store', [CarsController::class, 'store'])->name('coche-store');
    Route::get('edit/{id}', [CarsController::class, 'edit'])->name('coche-edit');
    Route::post('update/{id}', [CarsController::class, 'update'])->name('coche-update');
    Route::get('destroy/{id}', [CarsController::class, 'destroy'])->name('coche-destroy');
});

require __DIR__ . '/auth.php';
