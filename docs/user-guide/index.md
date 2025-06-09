---
{
    "title": "User Guide",
    "description": "",
    "navbar": true,
    "sideBar": true,
    "footer": false,
    "outline": [
        1,
        3
    ],
    "editLink": false,
    "lastUpdated": true,
    "aside": "right",
    "layout": "doc",
    "custom": {},
    "hero": {
        "image": {
            "src": "",
            "alt": "",
            "width": "",
            "height": ""
        },
        "name": "VitePressSimple",
        "text": "quick to config vitePress",
        "description": "",
        "tagline": "",
        "actions": [],
        "features": [],
        "head": []
    }
}
---

# Functions in S\_TIDE

## FOR DOCUMENTATION

s\_readme.m - this function briefly introduces all functions in S\_TIDE

## FOR DEMONSTRATION

s\_demo.m - demonstration codes for all functions in S\_TIDE

## FOR AUXILIARY ANALYSIS

s\_plot\_tidal\_ellipse.m - plot tidal ellipse

s\_plot\_tidal\_ellipse2.m - plot tidal ellipse at full depth

s\_estimate\_tidal\_ellipse.m - calculate the parameters of tidal ellipse

s\_construct.m - construct water levels by given tidal information without nodal factor/angle

s\_nodal\_cal.m - calculate the nodal factor and angle for given tides

s\_construct2.m - construct water levels by given tidal information and nodal factor/angle (at middle time)

s\_construct22.m - a revised version of s\_construct2.m, which can simultaneously construct water levels at numerous locations.

s\_construct3.m - construct water levels by given tidal information and nodal factor/angle (at each time)

s\_tidalcharacter.m - calculate the basic tidal characters (such as skewness, high and low tides) from given water levels

s\_alias.m - calculate the alias period caused by long-period satellite sampling

s\_minimumLOR.m - calculate the minimum length of records to resolve given constituents

s\_eot.m - function to read EOT20 tide models

s\_equilibrium\_tide.m - calculate equilibrium tidal levels

s\_estimate\_max\_tidalcurrent.m - calculate the maximum possible tidal current speed with given N constituents

s\_tdd.m - calculate the theoretical depth datum with given N constituents

s\_rotation\_spectra.m - calculate the rotation spectrum of currents

s\_rtl.m - calculate the riding high/low tide levels from given water levels

s\_rtl2.m - a modified version of s\_rtl.m

s\_modaldecomposition.m - dynamical modal decomposition for internal tides

s\_modaldecomposition2.m - dynamical modal decomposition for internal tides,with regularization methods

s\_earthtide.m - function to calculate theoretical earth tides/ocean tides potential

s\_draw\_tidalchart.m - function to draw co-tidal charts using EOT20 ocean tidal model

s\_inertial.m - function to calculate the latitude which can generate near inertial oscillations whose frequencies are same as given tidal constituents

s\_rS2.m - function to calculate radiational S2 tides from observed M2, S2, N2，K2 tides

s\_wavelength.m - function to calculate the wave velocity and length of tidal constituents at given water depth

s\_vector.m - function to realize vector operation (plus or minus)

s\_tidetable.m - function to generate tide table with given hourly water level observations

s\_HAreport.m - function to generate tidal analysis report (in the form of doc)

## FOR TIDAL HARMONIC ANALYSIS

s\_RHA.m - a revised harmonic analysis model which can consider non-astronomical external forcing (e.g. ENSO, Pan et al., 2025, doi: 10.1016/j.pocean.2024.103410)

s\_MHACS - a modified harmonic analysis model designed for short-term tidal observations based on the credo of smoothness (Pan et al., 2023, doi: 10.1016/j.ocemod.2023.102251)

s\_MHACS2 - an improved version of s\_MHACS which can realize ridge regression and Lasso regression (Pan et al., 2024, doi: 10.1016/j.ocemod.2024.102372)

s\_MHACSe - error estimation for MHACS

s\_highlowtides - function to perform harmonic analysis for high and low tides (Pan et al., 2024, doi: 10.1016/j.csr.2024.105179)

s\_quasi\_HA.m - quasi harmonic analysis (for observations more than 24 hours but less than 13 days) using reference relationships from EOT20 model.

s\_quasi\_HA2.m - a revised version of s\_quasi\_HA for uneven observations

s\_tide.m - computes the tidal analysis of the real tidal time series using Enhanced Harmonic Analysis (EHA) without nodal corrections. Users need to use s\_nodal\_correction function to nodally correct the amplitudes and phases.

s\_tide\_m1.m - a modified version of s\_tide.m

s\_tide\_m2.m - a modified version of s\_tide.m

s\_tide\_m3.m - a modified version of s\_tide.m (for satellite data)

s\_tide\_m4.m - a modified version of s\_tide.m (for satellite data)

s\_tide\_m5.m - a modified version of s\_tide\_m2.m (for uneven data)

s\_tide\_m55.m - a modified version of s\_tide\_m5.m (adding weights)

s\_tide\_m6.m - a modified version of s\_tide\_m4.m (for uneven satellite data)

s\_tide\_m66.m - a modified version of s\_tide\_m6.m (adding weights)

s\_tide\_m7.m - a modified version of s\_tide.m which is designed specifically for estimating linear trends of tidal amplitudes and phases

s\_tide\_m8.m - a modified version of s\_tide\_m3.m (only uses nodal factor and angle at central time for nodal correction)

Notes: s\_tide series functions use independent point (IP) scheme to obtain temporal variability of tidal parameters. For classical harmonic analysis, IP number should be set as 1, namely, tidal parameters are time-invariant. If IP number is set to 2, linear variations of tidal parameters can be obtained. The increase of IP number can induce more complicated variability in tidal parameters, but also increases the risk of over-fitting. For even tide gauge data, users can use s\_tide\_m8 function. For even/uneven satellite data, users can use s\_tide\_m4/s\_tide\_m6 function. For tidal current data, users need to analyze u and v respectively, and put tidal constants of u and v into s\_estimate\_tidal\_ellipse function to calculate tidal ellipse parameters.
