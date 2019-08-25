import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class SideBar extends Component{
    render(){
        return(
                
            <div  data-scroll-to-active="true" className="main-menu menu-fixed menu-dark menu-accordion menu-shadow">
                <div className="main-menu-header">
                    <input type="text" placeholder="Search" className="menu-search form-control round"/>
                </div>
                <div className="main-menu-content">
                    <ul id="main-menu-navigation" data-menu="menu-navigation" className="navigation navigation-main">
                        <li className=" nav-item">
                            <a href="#">
                                <i className="icon-home3"></i>
                                <span data-i18n="nav.dash.main" className="menu-title">Dashboard</span>
                                <span className="tag tag tag-primary tag-pill float-xs-right mr-2">2</span>
                            </a>
                            <ul className="menu-content">
                                <li className="active">
                                    <Link to="/s" data-i18n="nav.dash.main" className="active">Dashboard</Link>
                                    {/* <Link to="index.html" data-i18n="nav.dash.main" className="menu-item">Dashboard</Link> */}
                                </li>
                                <li>
                                    <Link to="/login" data-i18n="nav.dash.main" className="active">Logout</Link>
                                    {/* <Link to="dashboard-2.html" data-i18n="nav.dash.main" className="menu-item">Dashboard 2</Link> */}
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <Link to="#">
                                <i className="icon-stack-2"></i>
                                <span data-i18n="nav.page_layouts.main" className="menu-title">Page layouts</span>
                            </Link>
                            <ul className="menu-content">
                                <li>
                                    <Link to="layout-1-column.html" data-i18n="nav.page_layouts.1_column" className="menu-item">1 column</Link>
                                </li>
                                <li>
                                    <Link to="layout-2-columns.html" data-i18n="nav.page_layouts.2_columns" className="menu-item">2 columns</Link>
                                </li>
                                <li>
                                    <Link to="layout-boxed.html" data-i18n="nav.page_layouts.boxed_layout" className="menu-item">Boxed layout</Link>
                                </li>
                                <li>
                                    <Link to="layout-static.html" data-i18n="nav.page_layouts.static_layout" className="menu-item">Static layout</Link>
                                </li>
                                <li className="navigation-divider"></li>
                                <li>
                                    <Link to="layout-light.html" data-i18n="nav.page_layouts.light_layout" className="menu-item">Light layout</Link>
                                </li>
                                <li>
                                    <Link to="layout-dark.html" data-i18n="nav.page_layouts.dark_layout" className="menu-item">Dark layout</Link>
                                </li>
                                <li>
                                    <Link to="layout-semi-dark.html" data-i18n="nav.page_layouts.semi_dark_layout" className="menu-item">Semi dark layout</Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <Link to="#">
                                <i className="icon-briefcase4"></i>
                                <span data-i18n="nav.project.main" className="menu-title">Pages</span>
                            </Link>
                            <ul className="menu-content">
                                <li>
                                    <Link to="invoice-template.html" data-i18n="nav.invoice.invoice_template" className="menu-item">Invoice Template</Link>
                                </li>
                                <li>
                                    <Link to="gallery-grid.html" data-i18n="nav.gallery_pages.gallery_grid" className="menu-item">Gallery Grid</Link>
                                </li>
                                <li>
                                    <Link to="search-page.html" data-i18n="nav.search_pages.search_page" className="menu-item">Search Page</Link>
                                </li>
                                <li>
                                    <Link to="search-website.html" data-i18n="nav.search_pages.search_website" className="menu-item">Search Website</Link>
                                </li>
                                <li>
                                    <Link to="login-simple.html" data-i18n="nav.login_register_pages.login_simple" className="menu-item">Login Simple</Link>
                                </li>
                                <li>
                                    <Link to="register-simple.html" data-i18n="nav.login_register_pages.register_simple" className="menu-item">Register Simple</Link>
                                </li>
                                <li>
                                    <Link to="unlock-user.html" data-i18n="nav.login_register_pages.unlock_user" className="menu-item">Unlock User</Link>
                                </li>
                                <li>
                                    <Link to="recover-password.html" data-i18n="nav.login_register_pages.recover_password" className="menu-item">Recover Password</Link>
                                </li>
                                <li>
                                    <Link to="#" data-i18n="nav.error_pages.main" className="menu-item">Error</Link>
                                    <ul className="menu-content">
                                        <li>
                                            <Link to="error-400.html" data-i18n="nav.error_pages.error_400" className="menu-item">Error 400</Link>
                                        </li>
                                        <li>
                                            <Link to="error-401.html" data-i18n="nav.error_pages.error_401" className="menu-item">Error 401</Link>
                                        </li>
                                        <li>
                                            <Link to="error-403.html" data-i18n="nav.error_pages.error_403" className="menu-item">Error 403</Link>
                                        </li>
                                        <li>
                                            <Link to="error-404.html" data-i18n="nav.error_pages.error_404" className="menu-item">Error 404</Link>
                                        </li>
                                        <li>
                                            <Link to="error-500.html" data-i18n="nav.error_pages.error_500" className="menu-item">Error 500</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="coming-soon-flat.html" data-i18n="nav.other_pages.coming_soon.coming_soon_flat" className="menu-item">Coming Soon</Link>
                                </li>
                                <li>
                                    <Link to="under-maintenance.html" data-i18n="nav.other_pages.under_maintenance" className="menu-item">Maintenance</Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <Link to="#">
                                <i className="icon-ios-albums-outline"></i>
                                <span data-i18n="nav.cards.main" className="menu-title">Cards</span>
                            </Link>
                            <ul className="menu-content">
                                <li>
                                    <Link to="card-bootstrap.html" data-i18n="nav.cards.card_bootstrap" className="menu-item">Bootstrap Cards</Link>
                                </li>
                                <li>
                                    <Link to="card-actions.html" data-i18n="nav.cards.card_actions" className="menu-item">Card Action</Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <Link to="#">
                                <i className="icon-whatshot"></i>
                                <span data-i18n="nav.advance_cards.main" className="menu-title">Advance Cards</span>
                            </Link>
                            <ul className="menu-content">
                                <li>
                                    <Link to="card-statistics.html" data-i18n="nav.cards.card_statistics" className="menu-item">Statistics</Link>
                                </li>
                                <li>
                                    <Link to="card-charts.html" data-i18n="nav.cards.card_charts" className="menu-item">Charts</Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <Link to="#">
                                <i className="icon-compass3"></i>
                                <span data-i18n="nav.content.main" className="menu-title">Content</span>
                            </Link>
                            <ul className="menu-content">
                                <li>
                                    <Link to="content-grid.html" data-i18n="nav.content.content_grid" className="menu-item">Grid</Link>
                                </li>
                                <li>
                                    <Link to="content-typography.html" data-i18n="nav.content.content_typography" className="menu-item">Typography</Link>
                                </li>
                                <li>
                                    <Link to="content-text-utilities.html" data-i18n="nav.content.content_text_utilities" className="menu-item">Text utilities</Link>
                                </li>
                                <li>
                                    <Link to="content-helper-classNamees.html" data-i18n="nav.content.content_helper_classNamees" className="menu-item">Helper classNamees</Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <Link to="#">
                                <i className="icon-grid2"></i>
                                <span data-i18n="nav.components.main" className="menu-title">Components</span>
                            </Link>
                            <ul className="menu-content">
                                <li>
                                    <Link to="component-alerts.html" data-i18n="nav.components.component_alerts" className="menu-item">Alerts</Link>
                                </li>
                                <li>
                                    <Link to="component-buttons-basic.html" data-i18n="nav.components.components_buttons.component_buttons_basic" className="menu-item">Basic Buttons</Link>
                                </li>
                                <li>
                                    <Link to="component-carousel.html" data-i18n="nav.components.component_carousel" className="menu-item">Carousel</Link>
                                </li>
                                <li>
                                    <Link to="component-collapse.html" data-i18n="nav.components.component_collapse" className="menu-item">Collapse</Link>
                                </li>
                                <li>
                                    <Link to="component-dropdowns.html" data-i18n="nav.components.component_dropdowns" className="menu-item">Dropdowns</Link>
                                </li>
                                <li>
                                    <Link to="component-list-group.html" data-i18n="nav.components.component_list_group" className="menu-item">List Group</Link>
                                </li>
                                <li>
                                    <Link to="component-modals.html" data-i18n="nav.components.component_modals" className="menu-item">Modals</Link>
                                </li>
                                <li>
                                    <Link to="component-pagination.html" data-i18n="nav.components.component_pagination" className="menu-item">Pagination</Link>
                                </li>
                                <li>
                                    <Link to="component-navs-component.html" data-i18n="nav.components.component_navs_component" className="menu-item">Navs Component</Link>
                                </li>
                                <li>
                                    <Link to="component-tabs-component.html" data-i18n="nav.components.component_tabs_component" className="menu-item">Tabs Component</Link>
                                </li>
                                <li>
                                    <Link to="component-pills-component.html" data-i18n="nav.components.component_pills_component" className="menu-item">Pills Component</Link>
                                </li>
                                <li>
                                    <Link to="component-tooltips.html" data-i18n="nav.components.component_tooltips" className="menu-item">Tooltips</Link>
                                </li>
                                <li>
                                    <Link to="component-popovers.html" data-i18n="nav.components.component_popovers" className="menu-item">Popovers</Link>
                                </li>
                                <li>
                                    <Link to="component-tags.html" data-i18n="nav.components.component_tags" className="menu-item">Tags</Link>
                                </li>
                                <li>
                                    <Link to="component-pill-tags.html" className="menu-item">Pill Tags</Link>
                                </li>
                                <li>
                                    <Link to="component-progress.html" data-i18n="nav.components.component_progress" className="menu-item">Progress</Link>
                                </li>
                                <li>
                                    <Link to="component-media-objects.html" data-i18n="nav.components.component_media_objects" className="menu-item">Media Objects</Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <Link to="#">
                                <i className="icon-eye6"></i>
                                <span data-i18n="nav.icons.main" className="menu-title">Icons</span>
                            </Link>
                            <ul className="menu-content">
                                <li>
                                    <Link to="icons-feather.html" data-i18n="nav.icons.icons_feather" className="menu-item">Feather</Link>
                                </li>
                                <li>
                                    <Link to="icons-ionicons.html" data-i18n="nav.icons.icons_ionicons" className="menu-item">Ionicons</Link>
                                </li>
                                <li>
                                    <Link to="icons-fps-line.html" data-i18n="nav.icons.icons_fps_line" className="menu-item">FPS Line Icons</Link>
                                </li>
                                <li>
                                    <Link to="icons-ico-moon.html" data-i18n="nav.icons.icons_ico_moon" className="menu-item">Ico Moon</Link>
                                </li>
                                <li>
                                    <Link to="icons-font-awesome.html" data-i18n="nav.icons.icons_font_awesome" className="menu-item">Font Awesome</Link>
                                </li>
                                <li>
                                    <Link to="icons-meteocons.html" data-i18n="nav.icons.icons_meteocons" className="menu-item">Meteocons</Link>
                                </li>
                                <li>
                                    <Link to="icons-evil.html" data-i18n="nav.icons.icons_evil" className="menu-item">Evil Icons</Link>
                                </li>
                                <li>
                                    <Link to="icons-linecons.html" data-i18n="nav.icons.icons_linecons" className="menu-item">Linecons</Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <Link to="form-layout-basic.html">
                                <i className="icon-paper"></i>
                                <span data-i18n="nav.form_layouts.form_layout_basic" className="menu-title">Basic Forms</span>
                            </Link>
                        </li>
                        <li className=" nav-item">
                            <Link to="table-basic.html">
                                <i className="icon-table2"></i>
                                <span data-i18n="nav.bootstrap_tables.table_basic" className="menu-title">Basic Tables</span>
                            </Link>
                        </li>
                        <li className=" nav-item">
                            <Link to="#">
                                <i className="icon-bar-graph-2"></i>
                                <span data-i18n="nav.google_charts.main" className="menu-title">google Charts</span>
                            </Link>
                            <ul className="menu-content">
                                <li>
                                    <Link to="google-bar-charts.html" data-i18n="nav.google_charts.google_bar_charts" className="menu-item">Bar charts</Link>
                                </li>
                                <li>
                                    <Link to="google-line-charts.html" data-i18n="nav.google_charts.google_line_charts" className="menu-item">Line charts</Link>
                                </li>
                                <li>
                                    <Link to="google-pie-charts.html" data-i18n="nav.google_charts.google_pie_charts" className="menu-item">Pie charts</Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <Link to="#">
                                <i className="icon-stats-dots"></i>
                                <span data-i18n="nav.chartjs.main" className="menu-title">Chartjs</span>
                            </Link>
                            <ul className="menu-content">
                                <li>
                                    <Link to="chartjs-line-charts.html" data-i18n="nav.chartjs.chartjs_line_charts" className="menu-item">Line charts</Link>
                                </li>
                                <li>
                                    <Link to="chartjs-bar-charts.html" data-i18n="nav.chartjs.chartjs_bar_charts" className="menu-item">Bar charts</Link>
                                </li>
                                <li>
                                    <Link to="chartjs-pie-doughnut-charts.html" data-i18n="nav.chartjs.chartjs_pie_doughnut_charts" className="menu-item">Pie &amp; Doughnut charts</Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <Link to="#">
                                <i className="icon-pie-graph2"></i>
                                <span data-i18n="nav.flot_charts.main" className="menu-title">Flot Charts</span>
                            </Link>
                            <ul className="menu-content">
                                <li>
                                    <Link to="flot-line-charts.html" data-i18n="nav.flot_charts.flot_line_charts" className="menu-item">Line charts</Link>
                                </li>
                                <li>
                                    <Link to="flot-bar-charts.html" data-i18n="nav.flot_charts.flot_bar_charts" className="menu-item">Bar charts</Link>
                                </li>
                                <li>
                                    <Link to="flot-pie-charts.html" data-i18n="nav.flot_charts.flot_pie_charts" className="menu-item">Pie charts</Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <Link to="#">
                                <i className="icon-map22"></i>
                                <span data-i18n="nav.maps.main" className="menu-title">Maps</span>
                            </Link>
                            <ul className="menu-content">
                                <li>
                                    <Link to="gmaps-basic-maps.html" data-i18n="nav.maps.google_maps.gmaps_basic_maps" className="menu-item">Maps</Link>
                                </li>
                                <li>
                                    <Link to="vector-maps-jvq.html" data-i18n="nav.maps.vector_maps.vector_maps_jvq" className="menu-item">Vector Maps</Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <Link to="#">
                                <i className="icon-paint-format"></i>
                                <span data-i18n="nav.color_palette.main" className="menu-title">Color Palette</span>
                            </Link>
                            <ul className="menu-content">
                                <li>
                                    <Link to="color-palette-primary.html" data-i18n="nav.color_palette.color_palette_primary" className="menu-item">Primary palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-danger.html" data-i18n="nav.color_palette.color_palette_danger" className="menu-item">Danger palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-success.html" data-i18n="nav.color_palette.color_palette_success" className="menu-item">Success palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-warning.html" data-i18n="nav.color_palette.color_palette_warning" className="menu-item">Warning palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-info.html" data-i18n="nav.color_palette.color_palette_info" className="menu-item">Info palette</Link>
                                </li>
                                <li className="navigation-divider"></li>
                                <li>
                                    <Link to="color-palette-red.html" data-i18n="nav.color_palette.color_palette_red" className="menu-item">Red palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-pink.html" data-i18n="nav.color_palette.color_palette_pink" className="menu-item">Pink palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-purple.html" data-i18n="nav.color_palette.color_palette_purple" className="menu-item">Purple palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-deep-purple.html" data-i18n="nav.color_palette.color_palette_deep_purple" className="menu-item">Deep Purple palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-indigo.html" data-i18n="nav.color_palette.color_palette_indigo" className="menu-item">Indigo palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-blue.html" data-i18n="nav.color_palette.color_palette_blue" className="menu-item">Blue palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-light-blue.html" data-i18n="nav.color_palette.color_palette_light_blue" className="menu-item">Light Blue palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-cyan.html" data-i18n="nav.color_palette.color_palette_cyan" className="menu-item">Cyan palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-teal.html" data-i18n="nav.color_palette.color_palette_teal" className="menu-item">Teal palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-green.html" data-i18n="nav.color_palette.color_palette_green" className="menu-item">Green palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-light-green.html" data-i18n="nav.color_palette.color_palette_light_green" className="menu-item">Light Green palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-lime.html" data-i18n="nav.color_palette.color_palette_lime" className="menu-item">Lime palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-yellow.html" data-i18n="nav.color_palette.color_palette_yellow" className="menu-item">Yellow palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-amber.html" data-i18n="nav.color_palette.color_palette_amber" className="menu-item">Amber palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-orange.html" data-i18n="nav.color_palette.color_palette_orange" className="menu-item">Orange palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-deep-orange.html" data-i18n="nav.color_palette.color_palette_deep_orange" className="menu-item">Deep Orange palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-brown.html" data-i18n="nav.color_palette.color_palette_brown" className="menu-item">Brown palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-blue-grey.html" data-i18n="nav.color_palette.color_palette_blue_grey" className="menu-item">Blue Grey palette</Link>
                                </li>
                                <li>
                                    <Link to="color-palette-grey.html" data-i18n="nav.color_palette.color_palette_grey" className="menu-item">Grey palette</Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item">
                            <Link to="changelog.html">
                                <i className="icon-copy"></i>
                                <span data-i18n="nav.changelog.main" className="menu-title">Changelog</span>
                                <span className="tag tag tag-pill tag-danger float-xs-right">1.0</span>
                            </Link>
                        </li>
                        <li className="disabled nav-item">
                            <Link to="#">
                                <i className="icon-eye-disabled"></i>
                                <span data-i18n="nav.disabled_menu.main" className="menu-title">Disabled Menu</span>
                            </Link>
                        </li>
                        <li className=" nav-item">
                            <Link to="#">
                                <i className="icon-android-funnel"></i>
                                <span data-i18n="nav.menu_levels.main" className="menu-title">Menu levels</span>
                            </Link>
                            <ul className="menu-content">
                                <li>
                                    <Link to="#" data-i18n="nav.menu_levels.second_level" className="menu-item">Second level</Link>
                                </li>
                                <li>
                                    <Link to="#" data-i18n="nav.menu_levels.second_level_child.main" className="menu-item">Second level child</Link>
                                    <ul className="menu-content">
                                        <li>
                                            <Link to="#" data-i18n="nav.menu_levels.second_level_child.third_level" className="menu-item">Third level</Link>
                                        </li>
                                        <li>
                                            <Link to="#" data-i18n="nav.menu_levels.second_level_child.third_level_child.main" className="menu-item">Third level child</Link>
                                            <ul className="menu-content">
                                                <li>
                                                    <Link to="#" data-i18n="nav.menu_levels.second_level_child.third_level_child.fourth_level1" className="menu-item">Fourth level</Link>
                                                </li>
                                                <li>
                                                    <Link to="#" data-i18n="nav.menu_levels.second_level_child.third_level_child.fourth_level2" className="menu-item">Fourth level</Link>
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
                            <Link to="https://github.com/pixinvent/robust-free-bootstrap-admin-template/issues">
                                <i className="icon-support"></i>
                                <span data-i18n="nav.support_raise_support.main" className="menu-title">Raise Support</span>
                            </Link>
                        </li>
                        <li className=" nav-item">
                            <Link to="https://pixinvent.com/free-bootstrap-template/robust-lite/documentation">
                                <i className="icon-document-text"></i>
                                <span data-i18n="nav.support_documentation.main" className="menu-title">Documentation</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideBar