/*
	Copyright 2018 Telenor Digital AS

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/

import { bindable, noView } from "aurelia-framework";

import * as NProgress from "nprogress";
import "nprogress/nprogress.css";
import "./loading-indicator.scss";

// Simple config
NProgress.configure({
  showSpinner: false,
  easing: "ease",
  speed: 200,
});

@noView()
export class LoadingIndicator {
  @bindable loading = false;

  loadingChanged(isLoading) {
    if (isLoading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }
}
