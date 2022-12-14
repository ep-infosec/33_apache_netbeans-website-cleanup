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
 * https://www.netbeans.org/cddl-gplv2.html or nbbuild/licenses/CDDL-GPL-2-CP. See the
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

var AUTOMATIC_DOWNLOAD_MESSAGE  = "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u043d\u0430\u0447\u0430\u0442\u044c\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438.<br>\u0415\u0441\u043b\u0438 \u044d\u0442\u043e\u0433\u043e \u043d\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e, <a href=\"{0}\" class=\"download_link\">\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0435\u0433\u043e \u0437\u0434\u0435\u0441\u044c</a>.<br>";

var PRODUCT_NAME      = "NetBeans {0}";
var INSTALLER_MESSAGE = "\u041c\u0430\u0441\u0442\u0435\u0440 \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 {0}";
var NOFILE_MESSAGE    = "\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430" ;

var NETBEANS_DOWNLOAD_STARTED_PAGE_TITLE       = "\u041d\u0430\u0447\u0430\u0442\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0440\u0435\u0434\u044b NetBeans";
var NETBEANS_DOWNLOAD_STARTED_PAGE_DESCRIPTION = "\u041d\u0430\u0447\u0430\u0442\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0440\u0435\u0434\u044b NetBeans";

var NETBEANS_DOWNLOAD_STARTED_HEADER = "\u041d\u0430\u0447\u0430\u0442\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0440\u0435\u0434\u044b NetBeans {0}";
var RELEASE_NOTES_LABEL = "\u0417\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u044f \u043e \u0432\u044b\u043f\u0443\u0441\u043a\u0435";
var INSTALL_NOTES_LABEL = "\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u043f\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435";
var FIND_OUT_MORE_LABEL = "\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f";
var PLUGINS_LABEL       = "\u041f\u043b\u0430\u0433\u0438\u043d\u044b";
var PLUGINS_DESCRIPTION = "\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e\u043c NetBeans \u0438 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u043c\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c\u0438.";
var TUTORIALS_LABEL     = " \u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430";
var TUTORIALS_DESCRIPTION = "\u041d\u0430\u043f\u0438\u0441\u0430\u043d\u044b \u0438 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u044b \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e\u043c NetBeans \u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u0430\u043c\u0438.";
var TRAINING_LABEL = "\u0423\u0447\u0435\u0431\u043d\u044b\u0435 \u043a\u0443\u0440\u0441\u044b";
var TRAINING_DESCRIPTION = "\u041a\u0443\u0440\u0441\u044b \u0434\u043b\u044f \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u0412\u0430\u0448\u0438\u0445 \u043d\u0430\u0432\u044b\u043a\u043e\u0432.";
var SUPPORT_LABEL        = "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430";
var SUPPORT_DESCRIPTION  = "\u0413\u0438\u0431\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0432\u044b \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u043b\u0438 \u0441\u0432\u043e\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.";

// $PRODUCT_NAME $TYPE (Installer for $PLATFORM/Zip)/$Language ($Language_ID) $filename ($SIZE) MD5: $MD5
var INFO_MESSAGE = "{0}{1} {2}/{3} ({4})<br>{5} ({6} \u041c\u0431)<br>MD5: {7}";
var INFO_MESSAGE_OTHER = "{0} ({1} \u041c\u0431)<br>MD5: {2}";

//DO NOT TRANSLATE
var SUBSCRIPTION_PHP_URL = "http://services.netbeans.org/sub.php";

