/*
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 * 
 * Copyright (c) 2010, Oracle and/or its affiliates. All rights reserved.
 * 
 * The contents of this file are subject to the terms of either the GNU General
 * Public License Version 2 only ("GPL") or the Common Development and Distribution
 * License("CDDL") (collectively, the "License"). You may not use this file except in
 * compliance with the License. You can obtain a copy of the License at
 * https://netbeans.org/cddl-gplv2.html or nbbuild/licenses/CDDL-GPL-2-CP. See the
 * License for the specific language governing permissions and limitations under the
 * License.  When distributing the software, include this License Header Notice in
 * each file and include the License file at nbbuild/licenses/CDDL-GPL-2-CP.  Sun
 * designates this particular file as subject to the "Classpath" exception as
 * provided by Sun in the GPL Version 2 section of the License file that
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

var BUNDLED_SERVERS_GROUP_NAME = "Bundled&nbsp;servers";
                                                   
var NETBEANS_DOWNLOAD_BUNDLES_MSG = "NetBeans IDE Download Bundles";
var NETBEANS_DOWNLOAD_BUNDLES_COMMUNITY_MSG = "NetBeans IDE Download Bundles in community contributed languages";
var NETBEANS_PACKS_MSG 		  = "Supported&nbsp;technologies";

var JDK_DOWNLOAD_LINK    = "http://java.sun.com/javase/downloads/index.jsp";
var NBJDK_DOWNLOAD_LINK  = "http://java.sun.com/javase/downloads/netbeans.html";

var JAVA_COM_LINK        = "http://java.com/";

var JDK_NOTE_ALL      = "Java 6 or Java 5 is required for installing and running the PHP, Ruby and C/C++ NetBeans Bundles. You can download the <a href=\"{0}\">latest Java at java.com</a>.<br><br>JDK 6 or JDK 5 is required for installing and running the Java SE, Java and All NetBeans Bundles. You can download <a href=\"{1}\">standalone JDK</a> or download the latest <a href=\"{2}\">JDK with NetBeans IDE Java SE bundle</a>.<br><br>";
//var JDK_NOTE_MACOSX   = "JDK 5.0 is required for installing and running the NetBeans IDE.";
var JDK_NOTE_MACOSX   = "";

var FREE_SIZE_MESSAGE  = "Free,&nbsp;{0}&nbsp;MB";
var NOT_AVAILABLE_SIZE = "--";

var NOTE_PREFIX    = "Note: ";
var NOTE_AND_SEP   = "{0} and {1}";
var NOTE_COMMA_SEP = "{0}, {1}";

var SINGLE_NOT_AVAILABLE_ZIP      = "{0} is not available in {1}";
var SINGLE_NOT_AVAILABLE_BUNDLE   = "{0} is not available for {1}";
var MULTIPLE_NOT_AVAILABLE_ZIP    = "{0} are not available in {1}";
var MULTIPLE_NOT_AVAILABLE_BUNDLE = "{0} are not available for {1}";

var ZIP_FILES_LIST_NAME             = "Zip Files";
var MODULE_CLUSTERS_FILES_LIST_NAME = "Module Clusters";

var NOTE_SOLARIS = "Note: Java ME is only available for Windows and Linux. <br>The UML Pack is available on the Update Center.";
var NOTE_MACOSX  = "Note: Java ME is only available for Windows and Linux. <br>The UML Pack is available on the Update Center.";
var NOTE_ZIP     = "Note: GlassFish and Apache Tomcat are only available in platform specific installers. The UML Pack is available on the Update Center.";
var NOTE_OTHER   = "Note: The UML Pack is available on the Update Center.";
var NOTE_JAVAFX  = "Available only with <a href=\"{0}\">NetBeans&nbsp;6.5.1</a>";

var MORE_LANGUAGES    = "More Languages...";
var COMMUNITY_MESSAGE = "The NetBeans Community has fully contributed to the language(s) that can be downloaded from this page. To get more insight about localization volume downloaded check the <a href=\"http://wiki.netbeans.org/TFL10nCommunityStatus\">community status page</a>. To download latest community contribution, visit the <a href=\"http://wiki.netbeans.org/TFLocalizationDevelopmentUC\">localization plugin page</a>.";
var COMMUNITY_CONTRIBUTED_SEP    = " -- Community Contributed -- " ;
var SUN_SUPPORTED_SEP            = " -- Sun Supported -- " ;

var NETBEANS_DOWNLOAD_PAGE_TITLE       = "NetBeans IDE Download";
var NETBEANS_DOWNLOAD_PAGE_DESCRIPTION = "NetBeans IDE Download";



var NETBEANS_DOWNLOAD_HEADER = "NetBeans IDE {0} Download";
var DEVELOPMENT_TITLE        = "Development";
var ARCHIVE_TITLE            = "Archive";
var EMAIL_LABEL              = "Email&nbsp;address&nbsp;(optional):&nbsp;";
var SUBSCRIBE_LABEL          = "Subscribe&nbsp;to&nbsp;newsletters:";
var MONTHLY_LABEL            = "Monthly&nbsp;&nbsp;&nbsp;&nbsp;";
var WEEKLY_LABEL             = "Weekly";
var CONTACT_LABEL            = "NetBeans&nbsp;can&nbsp;contact&nbsp;me&nbsp;at&nbsp;this&nbsp;address";
var LANGUAGE_LABEL           = "IDE Language:";
var PLATFORM_LABEL           = "Platform:";
var PLUGIN_MANAGER_LABEL     = "You can add or remove packs later using the IDE's Plugin Manager (Tools | Plugins).<br><br>";
var JAVATOOLSBUNDLE_LABEL    = "You can also download the NetBeans IDE as part of the <a href=\"http://java.sun.com/javaee/downloads/index.jsp\">Java EE 5 Tools Bundle</a> or <a href=\"http://download.netbeans.org/netbeans/6.1/mysql_bundle/\">MySQL GlassFish Bundle</a>.";
var SOURCE_BINARY_LABEL      = "NetBeans source code and binary builds without bundled runtimes are also available in <a id=\"zip_link\" href=\"{0}\">zip file format</a>.";
var BUILD_WIKI_LABEL         = "See also <a href=\"http://wiki.netbeans.org/wiki/view/WorkingWithNetBeansSources\">instructions on how to build the IDE from sources</a> or <a href=\"{0}\">installation instructions</a>.";

var LICENSE_NOTES_LINK      = "https://netbeans.org/about/legal/product-licences.html";

var ARCHIVE_BUILDS_LINK      = "http://services.netbeans.org/downloads/dev.php";
var DEVELOPMENT_BUILDS_LINK  = "http://bits.netbeans.org/download/trunk/nightly/latest/";

// TRANSLATE NOTE: change download*.gif to download*_<locale>.gif
var DOWNLOAD_BUTTON_NORMAL    = "download.gif";
var DOWNLOAD_BUTTON_DISABLED  = "download_d.gif";
var DOWNLOAD_BUTTON_HIGHLIGHT = "download_h.gif";

// DO NOT TRANSLATE
var START_PAGE = "start.html";
var ZIP_PAGE   = "zip.html";

var LEGAL_INFO_HEADER = "Important Legal Information:";

var CDDL_GPLV2_LINK = "https://netbeans.org/cddl-gplv2.html";
var LICENSE_DETAILS_LINK = "https://netbeans.org/about/legal/code_dependency_matrix.html";

var LEGAL_INFO_MESSAGE = "NetBeans Community Distributions are available under a Dual License consisting of the <a href=\"https://netbeans.org/cddl-gplv2.html\">Common Development and Distribution License (CDDL) v1.0 and GNU General Public License (GPL) v2</a>. Such distributions include additional components under separate licenses identified in the <a href=\"https://netbeans.org/about/legal/product-licences.html\">License file</a>. See the <a href=\"https://netbeans.org/about/legal/product-licences.html\">Third Party License</a> for external components included in NetBeans and their associated licenses.";

