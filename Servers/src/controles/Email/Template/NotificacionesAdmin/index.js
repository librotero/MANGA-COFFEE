"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdminNotification = (image) => {
    return `
      <head>
          <link rel="stylesheet" href="./style.css">
      </head>
      
      <div id="email___content">
      <img src=${image}>
      </div>
    `;
};
exports.default = AdminNotification;
