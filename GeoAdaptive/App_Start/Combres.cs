[assembly: WebActivator.PreApplicationStartMethod(typeof(GeoAdaptive.App_Start.Combres), "PreStart")]
namespace GeoAdaptive.App_Start {
	using System.Web.Routing;
	using global::Combres;
	
    public static class Combres {
        public static void PreStart() {
            RouteTable.Routes.AddCombresRoute("Combres");
        }
    }
}