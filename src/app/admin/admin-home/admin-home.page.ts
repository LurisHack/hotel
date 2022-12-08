import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
})
export class AdminHomePage implements OnInit {

  public appPages = [
    {title: 'ROOM', url: '/folder/Inbox', icon: 'Bed'},
    {title: 'POS', url: '/folder/Outbox', icon: 'print'},
    {title: 'STORE', url: '/folder/Spam', icon: 'storefront'},
    {title: 'RESTAURANT', url: '/folder/Spam', icon: 'fast-food'},
    {title: 'INVENTORY', url: '/folder/Favorites', icon: 'reader'},
    {title: 'LOG', url: '/folder/Archived', icon: 'library'},
    {title: 'SETTING', url: '/folder/Trash', icon: 'settings'},
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];


  constructor() { }

  ngOnInit() {
  }

}
