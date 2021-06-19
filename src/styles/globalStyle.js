/***************************************************************
 Copyright (C) 2021 Shruti Agarwal (mail2shruti.ag@gmail.com), Aman Dwivedi (aman.dwivedi5@gmail.com)
 
 SPDX-License-Identifier: GPL-2.0

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 version 2 as published by the Free Software Foundation.
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License along
 with this program; if not, write to the Free Software Foundation, Inc.,
 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
***************************************************************/

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;    
  }
  .bg-primary-color{
    background: ${({ theme }) => theme.primaryColor};
  }
  .primary-color-wrapper{
    background: ${({ theme }) => theme.primaryColor};
    padding: 1rem;
    color: ${({ theme }) => theme.secondaryText};
  }
  .text-primary-color{
    color: ${({ theme }) => theme.primaryColor};
  }
  .navbar-light .navbar-nav .nav-link{
    color: ${({ theme }) => theme.secondaryText};
    &:hover{
      color: ${({ theme }) => theme.secondaryText};
    }
    &:focus{
      color: ${({ theme }) => theme.secondaryText};
    }
    &:active{
      color: ${({ theme }) => theme.secondaryText};
    }
  }
  .dropdown-item{
    color: ${({ theme }) => theme.primaryText};
    &:hover:{
      background: ${({ theme }) => theme.primaryColor};
    }
  }
}`;
