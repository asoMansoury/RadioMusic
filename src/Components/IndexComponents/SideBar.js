import React,{Component} from 'react';

class SideBar extends Component{
    render(){
        return(
                
            <div data-scroll-to-active="true" className="main-menu menu-fixed menu-dark menu-accordion menu-shadow">
                <div className="main-menu-header">
                    <input type="text" placeholder="Search" className="menu-search form-control round"/>
                </div>
                <div className="main-menu-content">
                    <ul id="main-menu-navigation" data-menu="menu-navigation" className="navigation navigation-main">
                        <li className=" nav-item">
                            <a href="index.html">
                                <i className="icon-home3"></i>
                                <span data-i18n="nav.dash.main" className="menu-title">Dashboard</span>
                                <span className="tag tag tag-primary tag-pill float-xs-right mr-2">2</span>
                            </a>
                            <ul className="menu-content">
                                <li className="active">
                                    <a href="index.html" data-i18n="nav.dash.main" className="menu-item">Dashboard</a>
                                </li>
                                <li>
                                    <a href="dashboard-2.html" data-i18n="nav.dash.main" className="menu-item">Dashboard 2</a>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <a href="#">
                                <i className="icon-stack-2"></i>
                                <span data-i18n="nav.page_layouts.main" className="menu-title">Page layouts</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <a href="layout-1-column.html" data-i18n="nav.page_layouts.1_column" className="menu-item">1 column</a>
                                </li>
                                <li>
                                    <a href="layout-2-columns.html" data-i18n="nav.page_layouts.2_columns" className="menu-item">2 columns</a>
                                </li>
                                <li>
                                    <a href="layout-boxed.html" data-i18n="nav.page_layouts.boxed_layout" className="menu-item">Boxed layout</a>
                                </li>
                                <li>
                                    <a href="layout-static.html" data-i18n="nav.page_layouts.static_layout" className="menu-item">Static layout</a>
                                </li>
                                <li className="navigation-divider"></li>
                                <li>
                                    <a href="layout-light.html" data-i18n="nav.page_layouts.light_layout" className="menu-item">Light layout</a>
                                </li>
                                <li>
                                    <a href="layout-dark.html" data-i18n="nav.page_layouts.dark_layout" className="menu-item">Dark layout</a>
                                </li>
                                <li>
                                    <a href="layout-semi-dark.html" data-i18n="nav.page_layouts.semi_dark_layout" className="menu-item">Semi dark layout</a>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <a href="#">
                                <i className="icon-briefcase4"></i>
                                <span data-i18n="nav.project.main" className="menu-title">Pages</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <a href="invoice-template.html" data-i18n="nav.invoice.invoice_template" className="menu-item">Invoice Template</a>
                                </li>
                                <li>
                                    <a href="gallery-grid.html" data-i18n="nav.gallery_pages.gallery_grid" className="menu-item">Gallery Grid</a>
                                </li>
                                <li>
                                    <a href="search-page.html" data-i18n="nav.search_pages.search_page" className="menu-item">Search Page</a>
                                </li>
                                <li>
                                    <a href="search-website.html" data-i18n="nav.search_pages.search_website" className="menu-item">Search Website</a>
                                </li>
                                <li>
                                    <a href="login-simple.html" data-i18n="nav.login_register_pages.login_simple" className="menu-item">Login Simple</a>
                                </li>
                                <li>
                                    <a href="register-simple.html" data-i18n="nav.login_register_pages.register_simple" className="menu-item">Register Simple</a>
                                </li>
                                <li>
                                    <a href="unlock-user.html" data-i18n="nav.login_register_pages.unlock_user" className="menu-item">Unlock User</a>
                                </li>
                                <li>
                                    <a href="recover-password.html" data-i18n="nav.login_register_pages.recover_password" className="menu-item">Recover Password</a>
                                </li>
                                <li>
                                    <a href="#" data-i18n="nav.error_pages.main" className="menu-item">Error</a>
                                    <ul className="menu-content">
                                        <li>
                                            <a href="error-400.html" data-i18n="nav.error_pages.error_400" className="menu-item">Error 400</a>
                                        </li>
                                        <li>
                                            <a href="error-401.html" data-i18n="nav.error_pages.error_401" className="menu-item">Error 401</a>
                                        </li>
                                        <li>
                                            <a href="error-403.html" data-i18n="nav.error_pages.error_403" className="menu-item">Error 403</a>
                                        </li>
                                        <li>
                                            <a href="error-404.html" data-i18n="nav.error_pages.error_404" className="menu-item">Error 404</a>
                                        </li>
                                        <li>
                                            <a href="error-500.html" data-i18n="nav.error_pages.error_500" className="menu-item">Error 500</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="coming-soon-flat.html" data-i18n="nav.other_pages.coming_soon.coming_soon_flat" className="menu-item">Coming Soon</a>
                                </li>
                                <li>
                                    <a href="under-maintenance.html" data-i18n="nav.other_pages.under_maintenance" className="menu-item">Maintenance</a>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <a href="#">
                                <i className="icon-ios-albums-outline"></i>
                                <span data-i18n="nav.cards.main" className="menu-title">Cards</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <a href="card-bootstrap.html" data-i18n="nav.cards.card_bootstrap" className="menu-item">Bootstrap Cards</a>
                                </li>
                                <li>
                                    <a href="card-actions.html" data-i18n="nav.cards.card_actions" className="menu-item">Card Action</a>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <a href="#">
                                <i className="icon-whatshot"></i>
                                <span data-i18n="nav.advance_cards.main" className="menu-title">Advance Cards</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <a href="card-statistics.html" data-i18n="nav.cards.card_statistics" className="menu-item">Statistics</a>
                                </li>
                                <li>
                                    <a href="card-charts.html" data-i18n="nav.cards.card_charts" className="menu-item">Charts</a>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <a href="#">
                                <i className="icon-compass3"></i>
                                <span data-i18n="nav.content.main" className="menu-title">Content</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <a href="content-grid.html" data-i18n="nav.content.content_grid" className="menu-item">Grid</a>
                                </li>
                                <li>
                                    <a href="content-typography.html" data-i18n="nav.content.content_typography" className="menu-item">Typography</a>
                                </li>
                                <li>
                                    <a href="content-text-utilities.html" data-i18n="nav.content.content_text_utilities" className="menu-item">Text utilities</a>
                                </li>
                                <li>
                                    <a href="content-helper-classNamees.html" data-i18n="nav.content.content_helper_classNamees" className="menu-item">Helper classNamees</a>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <a href="#">
                                <i className="icon-grid2"></i>
                                <span data-i18n="nav.components.main" className="menu-title">Components</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <a href="component-alerts.html" data-i18n="nav.components.component_alerts" className="menu-item">Alerts</a>
                                </li>
                                <li>
                                    <a href="component-buttons-basic.html" data-i18n="nav.components.components_buttons.component_buttons_basic" className="menu-item">Basic Buttons</a>
                                </li>
                                <li>
                                    <a href="component-carousel.html" data-i18n="nav.components.component_carousel" className="menu-item">Carousel</a>
                                </li>
                                <li>
                                    <a href="component-collapse.html" data-i18n="nav.components.component_collapse" className="menu-item">Collapse</a>
                                </li>
                                <li>
                                    <a href="component-dropdowns.html" data-i18n="nav.components.component_dropdowns" className="menu-item">Dropdowns</a>
                                </li>
                                <li>
                                    <a href="component-list-group.html" data-i18n="nav.components.component_list_group" className="menu-item">List Group</a>
                                </li>
                                <li>
                                    <a href="component-modals.html" data-i18n="nav.components.component_modals" className="menu-item">Modals</a>
                                </li>
                                <li>
                                    <a href="component-pagination.html" data-i18n="nav.components.component_pagination" className="menu-item">Pagination</a>
                                </li>
                                <li>
                                    <a href="component-navs-component.html" data-i18n="nav.components.component_navs_component" className="menu-item">Navs Component</a>
                                </li>
                                <li>
                                    <a href="component-tabs-component.html" data-i18n="nav.components.component_tabs_component" className="menu-item">Tabs Component</a>
                                </li>
                                <li>
                                    <a href="component-pills-component.html" data-i18n="nav.components.component_pills_component" className="menu-item">Pills Component</a>
                                </li>
                                <li>
                                    <a href="component-tooltips.html" data-i18n="nav.components.component_tooltips" className="menu-item">Tooltips</a>
                                </li>
                                <li>
                                    <a href="component-popovers.html" data-i18n="nav.components.component_popovers" className="menu-item">Popovers</a>
                                </li>
                                <li>
                                    <a href="component-tags.html" data-i18n="nav.components.component_tags" className="menu-item">Tags</a>
                                </li>
                                <li>
                                    <a href="component-pill-tags.html" className="menu-item">Pill Tags</a>
                                </li>
                                <li>
                                    <a href="component-progress.html" data-i18n="nav.components.component_progress" className="menu-item">Progress</a>
                                </li>
                                <li>
                                    <a href="component-media-objects.html" data-i18n="nav.components.component_media_objects" className="menu-item">Media Objects</a>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <a href="#">
                                <i className="icon-eye6"></i>
                                <span data-i18n="nav.icons.main" className="menu-title">Icons</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <a href="icons-feather.html" data-i18n="nav.icons.icons_feather" className="menu-item">Feather</a>
                                </li>
                                <li>
                                    <a href="icons-ionicons.html" data-i18n="nav.icons.icons_ionicons" className="menu-item">Ionicons</a>
                                </li>
                                <li>
                                    <a href="icons-fps-line.html" data-i18n="nav.icons.icons_fps_line" className="menu-item">FPS Line Icons</a>
                                </li>
                                <li>
                                    <a href="icons-ico-moon.html" data-i18n="nav.icons.icons_ico_moon" className="menu-item">Ico Moon</a>
                                </li>
                                <li>
                                    <a href="icons-font-awesome.html" data-i18n="nav.icons.icons_font_awesome" className="menu-item">Font Awesome</a>
                                </li>
                                <li>
                                    <a href="icons-meteocons.html" data-i18n="nav.icons.icons_meteocons" className="menu-item">Meteocons</a>
                                </li>
                                <li>
                                    <a href="icons-evil.html" data-i18n="nav.icons.icons_evil" className="menu-item">Evil Icons</a>
                                </li>
                                <li>
                                    <a href="icons-linecons.html" data-i18n="nav.icons.icons_linecons" className="menu-item">Linecons</a>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <a href="form-layout-basic.html">
                                <i className="icon-paper"></i>
                                <span data-i18n="nav.form_layouts.form_layout_basic" className="menu-title">Basic Forms</span>
                            </a>
                        </li>
                        <li className=" nav-item">
                            <a href="table-basic.html">
                                <i className="icon-table2"></i>
                                <span data-i18n="nav.bootstrap_tables.table_basic" className="menu-title">Basic Tables</span>
                            </a>
                        </li>
                        <li className=" nav-item">
                            <a href="#">
                                <i className="icon-bar-graph-2"></i>
                                <span data-i18n="nav.google_charts.main" className="menu-title">google Charts</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <a href="google-bar-charts.html" data-i18n="nav.google_charts.google_bar_charts" className="menu-item">Bar charts</a>
                                </li>
                                <li>
                                    <a href="google-line-charts.html" data-i18n="nav.google_charts.google_line_charts" className="menu-item">Line charts</a>
                                </li>
                                <li>
                                    <a href="google-pie-charts.html" data-i18n="nav.google_charts.google_pie_charts" className="menu-item">Pie charts</a>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <a href="#">
                                <i className="icon-stats-dots"></i>
                                <span data-i18n="nav.chartjs.main" className="menu-title">Chartjs</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <a href="chartjs-line-charts.html" data-i18n="nav.chartjs.chartjs_line_charts" className="menu-item">Line charts</a>
                                </li>
                                <li>
                                    <a href="chartjs-bar-charts.html" data-i18n="nav.chartjs.chartjs_bar_charts" className="menu-item">Bar charts</a>
                                </li>
                                <li>
                                    <a href="chartjs-pie-doughnut-charts.html" data-i18n="nav.chartjs.chartjs_pie_doughnut_charts" className="menu-item">Pie &amp; Doughnut charts</a>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <a href="#">
                                <i className="icon-pie-graph2"></i>
                                <span data-i18n="nav.flot_charts.main" className="menu-title">Flot Charts</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <a href="flot-line-charts.html" data-i18n="nav.flot_charts.flot_line_charts" className="menu-item">Line charts</a>
                                </li>
                                <li>
                                    <a href="flot-bar-charts.html" data-i18n="nav.flot_charts.flot_bar_charts" className="menu-item">Bar charts</a>
                                </li>
                                <li>
                                    <a href="flot-pie-charts.html" data-i18n="nav.flot_charts.flot_pie_charts" className="menu-item">Pie charts</a>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <a href="#">
                                <i className="icon-map22"></i>
                                <span data-i18n="nav.maps.main" className="menu-title">Maps</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <a href="gmaps-basic-maps.html" data-i18n="nav.maps.google_maps.gmaps_basic_maps" className="menu-item">Maps</a>
                                </li>
                                <li>
                                    <a href="vector-maps-jvq.html" data-i18n="nav.maps.vector_maps.vector_maps_jvq" className="menu-item">Vector Maps</a>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <a href="#">
                                <i className="icon-paint-format"></i>
                                <span data-i18n="nav.color_palette.main" className="menu-title">Color Palette</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <a href="color-palette-primary.html" data-i18n="nav.color_palette.color_palette_primary" className="menu-item">Primary palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-danger.html" data-i18n="nav.color_palette.color_palette_danger" className="menu-item">Danger palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-success.html" data-i18n="nav.color_palette.color_palette_success" className="menu-item">Success palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-warning.html" data-i18n="nav.color_palette.color_palette_warning" className="menu-item">Warning palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-info.html" data-i18n="nav.color_palette.color_palette_info" className="menu-item">Info palette</a>
                                </li>
                                <li className="navigation-divider"></li>
                                <li>
                                    <a href="color-palette-red.html" data-i18n="nav.color_palette.color_palette_red" className="menu-item">Red palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-pink.html" data-i18n="nav.color_palette.color_palette_pink" className="menu-item">Pink palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-purple.html" data-i18n="nav.color_palette.color_palette_purple" className="menu-item">Purple palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-deep-purple.html" data-i18n="nav.color_palette.color_palette_deep_purple" className="menu-item">Deep Purple palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-indigo.html" data-i18n="nav.color_palette.color_palette_indigo" className="menu-item">Indigo palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-blue.html" data-i18n="nav.color_palette.color_palette_blue" className="menu-item">Blue palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-light-blue.html" data-i18n="nav.color_palette.color_palette_light_blue" className="menu-item">Light Blue palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-cyan.html" data-i18n="nav.color_palette.color_palette_cyan" className="menu-item">Cyan palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-teal.html" data-i18n="nav.color_palette.color_palette_teal" className="menu-item">Teal palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-green.html" data-i18n="nav.color_palette.color_palette_green" className="menu-item">Green palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-light-green.html" data-i18n="nav.color_palette.color_palette_light_green" className="menu-item">Light Green palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-lime.html" data-i18n="nav.color_palette.color_palette_lime" className="menu-item">Lime palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-yellow.html" data-i18n="nav.color_palette.color_palette_yellow" className="menu-item">Yellow palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-amber.html" data-i18n="nav.color_palette.color_palette_amber" className="menu-item">Amber palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-orange.html" data-i18n="nav.color_palette.color_palette_orange" className="menu-item">Orange palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-deep-orange.html" data-i18n="nav.color_palette.color_palette_deep_orange" className="menu-item">Deep Orange palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-brown.html" data-i18n="nav.color_palette.color_palette_brown" className="menu-item">Brown palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-blue-grey.html" data-i18n="nav.color_palette.color_palette_blue_grey" className="menu-item">Blue Grey palette</a>
                                </li>
                                <li>
                                    <a href="color-palette-grey.html" data-i18n="nav.color_palette.color_palette_grey" className="menu-item">Grey palette</a>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <a href="changelog.html">
                                <i className="icon-copy"></i>
                                <span data-i18n="nav.changelog.main" className="menu-title">Changelog</span>
                                <span className="tag tag tag-pill tag-danger float-xs-right">1.0</span>
                            </a>
                        </li>
                        <li className="disabled nav-item">
                            <a href="#">
                                <i className="icon-eye-disabled"></i>
                                <span data-i18n="nav.disabled_menu.main" className="menu-title">Disabled Menu</span>
                            </a>
                        </li>
                        <li className=" nav-item">
                            <a href="#">
                                <i className="icon-android-funnel"></i>
                                <span data-i18n="nav.menu_levels.main" className="menu-title">Menu levels</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <a href="#" data-i18n="nav.menu_levels.second_level" className="menu-item">Second level</a>
                                </li>
                                <li>
                                    <a href="#" data-i18n="nav.menu_levels.second_level_child.main" className="menu-item">Second level child</a>
                                    <ul className="menu-content">
                                        <li>
                                            <a href="#" data-i18n="nav.menu_levels.second_level_child.third_level" className="menu-item">Third level</a>
                                        </li>
                                        <li>
                                            <a href="#" data-i18n="nav.menu_levels.second_level_child.third_level_child.main" className="menu-item">Third level child</a>
                                            <ul className="menu-content">
                                                <li>
                                                    <a href="#" data-i18n="nav.menu_levels.second_level_child.third_level_child.fourth_level1" className="menu-item">Fourth level</a>
                                                </li>
                                                <li>
                                                    <a href="#" data-i18n="nav.menu_levels.second_level_child.third_level_child.fourth_level2" className="menu-item">Fourth level</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className=" navigation-header">
                            <span data-i18n="nav.category.support">Support</span>
                            <i data-toggle="tooltip" data-placement="right" data-original-title="Support" className="icon-ellipsis icon-ellipsis"></i>
                        </li>
                        <li className=" nav-item">
                            <a href="https://github.com/pixinvent/robust-free-bootstrap-admin-template/issues">
                                <i className="icon-support"></i>
                                <span data-i18n="nav.support_raise_support.main" className="menu-title">Raise Support</span>
                            </a>
                        </li>
                        <li className=" nav-item">
                            <a href="https://pixinvent.com/free-bootstrap-template/robust-lite/documentation">
                                <i className="icon-document-text"></i>
                                <span data-i18n="nav.support_documentation.main" className="menu-title">Documentation</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideBar