import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  form: FormGroup = this.fb.group({
    control: this.fb.control("")
  });

  monthForm: FormGroup = this.fb.group({
    month: this.fb.control('', [Validators.required])
  });

  // Pie
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
    plugins: {
      legend: {
        display: false
      }
    }
  };
  pieChartLabels = [ 'Pérdidas', 'Ventas', 'Inversiones' ];
  pieChartDatasets = [ {
    data: [ 300, 500, 100 ],
    backgroundColor: [
      'rgb(0, 191, 255)',
      'rgb(54, 162, 235)',
      'rgb(77, 61, 240)'
    ],
  }];
  pieChartPlugins = [];

  // Line charts config

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    datasets: [
      {
        data: [ 250, 180, 380, 235, 450, 250, 300, 167, 400, 110, 550, 185 ],
        label: '2022',
        fill: true,
        tension: 0.3,
        borderColor: '#386E93',
        backgroundColor: 'rgba(0,129,205,0.1)',
        pointBackgroundColor: 'rgba(0,129,205.1)'
      },
      {
        data: [ 145, 350, 150, 280, 235, 350, 250, 270, 167, 350, 110, 450 ],
        label: '2023',
        fill: true,
        tension: 0.5,
        borderColor: '#0081cd',
        backgroundColor: 'rgba(10,216,209,0.1)',
        pointBackgroundColor: 'rgba(10,216,209,0.1)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    scales: {
      xAxis: {
        display: true
      },
      x: {
        grid: {
          display: false
        },
        display: false
      },
      yAxis: {
        display: true,
        min: 0,
        max: 700
      },
      y: {
        grid: {
          display: false
        },
        display: false
      }
    },
    plugins: {
      legend: {
          display: false
      }
    },
    layout: {
      padding: {
        left: 15,
        right: 15,
        bottom: 0,
        top: 0
      }
    }
  };
  public lineChartLegend = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
