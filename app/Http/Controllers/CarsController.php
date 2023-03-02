<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Car;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class CarsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cars = Car::all();
        // dd($cars);

        return Inertia::render('cars/Index', [
            'coches' => $cars,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'modelo' => 'required|string|max:255',
            'marca' => 'required|string|max:255',
            'precio' => 'required',
            'imagen' => 'required|string|max:255',
        ]);

        // dd($request);


        $imagen = $request->imagen;
        $imagen = str_replace('C:\fakepath\\', "http://localhost/img/DWES/p4/", $imagen);

        $cars = Car::create([
            'modelo' => $request->modelo,
            'marca' => $request->marca,
            'precio' => $request->precio,
            'imagen' => $imagen,
        ]);

        $cars->save();

        return redirect(RouteServiceProvider::HOMECOCHE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id): RedirectResponse
    {
        $car = Car::find($id);

        $car->delete();


        return redirect(RouteServiceProvider::HOMECOCHE);
    }
}
