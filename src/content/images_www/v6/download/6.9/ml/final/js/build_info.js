/*
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright 1997-2010 Oracle and/or its affiliates. All rights reserved.
 *
 * Oracle and Java are registered trademarks of Oracle and/or its affiliates.
 * Other names may be trademarks of their respective owners.
 *
 * The contents of this file are subject to the terms of either the GNU General
 * Public License Version 2 only ("GPL") or the Common Development and Distribution
 * License("CDDL") (collectively, the "License"). You may not use this file except in
 * compliance with the License. You can obtain a copy of the License at
 * https://netbeans.org/cddl-gplv2.html or nbbuild/licenses/CDDL-GPL-2-CP. See the
 * License for the specific language governing permissions and limitations under the
 * License.  When distributing the software, include this License Header Notice in
 * each file and include the License file at nbbuild/licenses/CDDL-GPL-2-CP.  Oracle
 * designates this particular file as subject to the "Classpath" exception as
 * provided by Oracle in the GPL Version 2 section of the License file that
 * accompanied this code. If applicable, add the following below the License Header,
 * with the fields enclosed by brackets [] replaced by your own identifying
 * information: "Portions Copyrighted [year] [name of copyright owner]"
 * 
 * Contributor(s):
 * 
 * The Original Software is NetBeans. The Initial Developer of the Original Software
 * is Sun Microsystems, Inc. Portions Copyright 1997-2007 Sun Microsystems, Inc. All
 * Rights Reserved.
 * 
 * If you wish your version of this file to be governed by only the CDDL or only the
 * GPL Version 2, indicate your decision by adding "[Contributor] elects to include
 * this software in this distribution under the [CDDL or GPL Version 2] license." If
 * you do not indicate a single choice of license, a recipient has the option to
 * distribute your version of this file under either the CDDL, the GPL Version 2 or
 * to extend the choice of license to its licensees as provided above. However, if
 * you add GPL Version 2 code and therefore, elected the GPL Version 2 license, then
 * the option applies only if the new code is made subject to such option by the
 * copyright holder.
 */


var build_info = new Object;

build_info.BUILD_DISPLAY_VERSION       = "6.9";
build_info.BUILD_DISPLAY_VERSION_SHORT = "6.9";

build_info.ZIP_FILES_PREFIX            = "netbeans-6.9-201006101454-ml";
build_info.BUNDLE_FILES_PREFIX         = "netbeans-6.9-ml";
build_info.BOUNCER_PRODUCT_PREFIX      = "netbeans-6.9-ml";

build_info.COMMUNITY_BUILD             = "0";
build_info.SHOW_ADDITIONAL_LANGUAGES   = "1";

build_info.ADDITIONAL_BUILD_LOCATION   = "http://bits.netbeans.org/netbeans/6.9/community/fcs/";

build_info.BUILD_LOCATION = "http://download.netbeans.org/netbeans/6.9/final/";

build_info.LOAD_OMNITURE_CODE          = 1;
build_info.LOAD_GOOGLE_ANALYTICS_CODE  = 0;
build_info.USE_BOUNCER                 = 0;
build_info.ADD_VERSION_INFO_TO_URL     = 0;

build_info.BOUNCER_URL = "http://services.netbeans.org/bouncer/index.php";

build_info.USE_HTML_ZIP_LISTING = 1;

build_info.add_download_tabs = function() {
	add_download_tab("6.9");
	add_download_tab("6.9.1", "https://netbeans.org/downloads/6.9.1/");
	add_download_tab(DEVELOPMENT_TITLE, DEVELOPMENT_BUILDS_LINK);
	add_download_tab(ARCHIVE_TITLE,ARCHIVE_BUILDS_LINK);
}
add_build_info(build_info);
