using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class PaymentIntentAdded1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "25b2d86e-8c40-49f0-9004-4c4a3e14898f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d3039b9a-f792-4a59-8cd4-8415491bb773");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ba882d61-f8ed-411f-8cc1-fa405724b961", "41e32886-d2e1-47d2-982b-4955aa08b51b", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "fcee6fd9-26c7-437e-bfd7-004234c88232", "62906230-99e9-4a2c-bb01-417fed503d8f", "Instructor", "INSTRUCTOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ba882d61-f8ed-411f-8cc1-fa405724b961");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fcee6fd9-26c7-437e-bfd7-004234c88232");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "25b2d86e-8c40-49f0-9004-4c4a3e14898f", "89547e03-cadf-4dd1-af1d-092b694aee05", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "d3039b9a-f792-4a59-8cd4-8415491bb773", "7e830e3e-04c8-4b94-b7ed-40fd7d97d4e6", "Instructor", "INSTRUCTOR" });
        }
    }
}
