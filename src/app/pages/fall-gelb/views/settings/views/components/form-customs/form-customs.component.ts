import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomsService } from '../../customs/customs.service';
import { TransportType } from '@shared/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import * as L from 'leaflet';
import { LatLng } from 'leaflet';
import Geocoder from 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';

@Component({
  selector: 'app-form-customs',
  templateUrl: './form-customs.component.html',
  styleUrls: ['./form-customs.component.scss']
})
export class FormCustomsComponent implements OnInit{

  map!: L.Map;
  marker: L.Marker | null = null;
  geocoderMarker: L.Marker | null = null
  latitudeForm: number = 0;
  longitudeForm: number = 0;

  customsForm: FormGroup = this.fb.group({
    name: this.fb.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
    address: this.fb.control(this.data.dialogData ? this.data.dialogData[0].address : '',),
    transport_types: this.fb.control(""),
  })
  transportType: TransportType[] = [];
  selectedTypes: TransportType[] = [];


  customForm: FormControl = new FormControl();


  
  constructor( private fb:FormBuilder,
               private customsService:CustomsService,
               private dialogRef:MatDialogRef<FormCustomsComponent>,
               @Inject(MAT_DIALOG_DATA) private data: any,
               private toastService:ToastService) {}

  
  ngOnInit(): void {
    this.getTranspTypes();
    this.getSelectedTransType();
    this.initializeMap();
    this.getCurrentLocation();
  }

  getTranspTypes() {
    this.customsService.getTransportTypes()
      .subscribe((types) => {
        this.transportType = types;
      })
  }

  getSelectedTransType() {
    const transportTypeIds = [];
    
    if (this.data && this.data.dialogData && this.data.dialogData[0].transport_types) {
      for (let i = 0; i < this.data.dialogData[0].transport_types.length; i++) {
          transportTypeIds.push(this.data.dialogData[0].transport_types[i].id);
      }
    }
    
    this.selectedTypes = transportTypeIds;

    this.customForm = new FormControl(this.selectedTypes);
  }

  initializeMap() {
    if(this.data.dialogData){

      console.log('Data Existe')

      this.map = L.map('map').setView([this.data.dialogData[0].latitude, this.data.dialogData[0].longitude], 11);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors'
      }).addTo(this.map);

      this.map.on('click', (event: L.LeafletMouseEvent) => {
        const { latlng } = event;
        this.latitudeForm = latlng.lat;
        this.longitudeForm = latlng.lng;

        if (this.marker) {
          this.map.removeLayer(this.marker);
        }

        const newLatLng = new LatLng(this.latitudeForm, this.longitudeForm)

        this.marker = L.marker(newLatLng).addTo(this.map);
      });

      new Geocoder();
        (L.Control as any).geocoder({
          defaultMarkGeocode: false,
          collapse: false,
          placeholder: 'Ingresa una Dirección...',
          errorMessage: 'No encontrado'
        }).on('markgeocode', (e:any) => {
            this.map.setView(e.geocode.center, 11)
            this.latitudeForm = e.geocode.properties.lat;          
            this.longitudeForm = e.geocode.properties.lon; 

            if(this.geocoderMarker) {
              this.map.removeLayer(this.geocoderMarker)
            }
          }).addTo(this.map)

    }else{

      console.log('Data No Existe')

      this.map = L.map('map').setView([7.721123907246407, -65.67882751949143], 11);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors'
      }).addTo(this.map);

      this.map.on('click', (event: L.LeafletMouseEvent) => {
        const { latlng } = event;
        console.log(`Latitud: ${latlng.lat}, Longitud: ${latlng.lng}`);
        this.latitudeForm = latlng.lat;
        this.longitudeForm = latlng.lng;

        if (this.marker) {
          this.map.removeLayer(this.marker);
        }

        this.marker = L.marker(latlng).addTo(this.map);

      });

      new Geocoder();
        (L.Control as any).geocoder({
          defaultMarkGeocode: false,
          collapse: false,
          placeholder: 'Ingresa una Dirección...',
          errorMessage: 'No encontrado'
        }).on('markgeocode', (e:any) => {

            if(this.marker) {
              this.map.removeLayer(this.marker);
            }

            this.map.setView(e.geocode.center, 11)
            this.latitudeForm = e.geocode.properties.lat;          
            this.longitudeForm = e.geocode.properties.lon; 

            const newLatLng = new LatLng(this.latitudeForm, this.longitudeForm)

            this.marker = L.marker(newLatLng).addTo(this.map);

            if(this.geocoderMarker) {
              this.map.removeLayer(this.geocoderMarker)
            }
          }).addTo(this.map)
    }
}

  
  getCurrentLocation() {
    if(!this.data.dialogData) {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          this.map.setView([latitude, longitude], 11);
          this.latitudeForm = latitude;
          this.longitudeForm = longitude;
          console.log(`Ubicación actual - Latitud: ${latitude}, Longitud: ${longitude}`);
  
          if (this.marker) {
            this.map.removeLayer(this.marker);
          }
  
          this.marker = L.marker([this.latitudeForm, this.longitudeForm]).addTo(this.map);
        }, (error) => {
          console.error('Error al obtener la ubicación', error);
        });
      } else {
        console.error('Geolocalización no soportada');
      }

    }else {

          this.map.setView([this.data.dialogData[0].latitude, this.data.dialogData[0].longitude], 11);
          this.latitudeForm = this.data.dialogData[0].latitude;
          this.longitudeForm = this.data.dialogData[0].longitude;
  
          if (this.marker) {
            this.map.removeLayer(this.marker);
          }
  
          this.marker = L.marker([this.latitudeForm, this.longitudeForm]).addTo(this.map);

    }
    
  }
  
  saveCustoms() {
    if (this.customsForm.valid) {
      if(this.data.title === 'Crear Aduana'){

        const custom = {
          name: this.customsForm.get('name')?.value, 
          address: this.customsForm.get('address')?.value, 
          latitude: this.latitudeForm,
          longitude: this.longitudeForm,
          transport_types: this.customForm.value,  
        }
          console.log('Custom: ', custom)
        this.customsService.createCustom(custom)
          .subscribe((data) => {
            this.toastService.showToaster("Aduana Creada Correctamente!")
            this.dialogRef.close(true);
          },
          (error) => console.error('ERROR! :', error))

      }else{

        const customEdit = {
          name: this.customsForm.get('name')?.value, 
          address: this.customsForm.get('address')?.value, 
          latitude: this.latitudeForm,
          longitude: this.longitudeForm,
          transport_types: this.customForm.value,
   
        }
        console.log('customEdit: ', customEdit)
  
        this.customsService.editCustom(customEdit, this.data.dialogData[0].id)
          .subscribe((data) => {
            this.toastService.showToaster("Aduana Editada Correctamente!")
            this.dialogRef.close(true);
          },
          (error) => this.toastService.showToaster(error.error.message, true))
      }
    } else{
        this.customForm.markAllAsTouched();
    }
  }
}




